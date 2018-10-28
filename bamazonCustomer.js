var mysql = require("mysql");
var inquirer = require("inquirer");

// CONNECT WITH THE DATABASE
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);

    start();

});


// --------------------------- GREET CUSTOMER AND SHOW LIST OF ITEMS ----------------------------- //
function start() {
    inquirer
        .prompt({
            name: "forSale",
            type: "rawlist",
            message: "Would you like see all products available for sale?",
            choices: ["Yes", "No"]
        }).then(function (answer) {
            // based on the answer, show either the products or thank them for stopping by
            if (answer.forSale === "Yes") {
                // Show items if they say yes showItems();
                showItems(answer);
            }
            else {
                
                // "Thanks for stopping by" notShopping();
                notShopping(answer);
                start();
            }
        })
}

var stock_quantity;

// -------------------- SHOW LIST OF ITEMS AVAILABLE FUNCTION -------------------------- //
function showItems(answer) {
    var query = "SELECT * FROM bamazon_db.products";
    connection.query(query, answer, function (err, res) {
        console.log("========================CURRENT BAMAZON ITEMS FOR SALE========================");
        for (var i = 0; i < res.length; i++) {
            
            console.log("Item ID: " +
                res[i].item_id +
                " || Item Name: " +
                res[i].product_name +
                " || Item Price: " +
                res[i].price + 
                " || Stock Quantity: " +
                res[i].stock_quantity);
        }

        confirmPurchase(res);
    });
}

// -------------------- NOT SHOPPING FUNCTION -------------------------- //
function notShopping() {
    // console.log(answer);
    console.log("Thanks for stopping by!");
}

// -------------------- CONFIRMING CUSTOMER PURCHAS FUNCTION -------------------------- //
function confirmPurchase() {
    inquirer.prompt([{

        type: "confirm",
        name: "continue",
        message: "Would you like to purchase an item?",
        default: true

    }]).then(function(user) {
        if (user.continue === true) {
            makePurchase();
        } else {
            console.log("Thank you! Come back soon!");
            start();
        }
    });
}



// ----------------------- CUSTOMER IS READY TO MAKE A PURCHASE FUNCTION --------------------------- //
function makePurchase(results) {
    // Prompt the customer to enter the item id # and quantity they wish to order.
    inquirer
        .prompt([
            {
                name: "itemID",
                type: "input",
                message: "What is the ID of the item you would like to buy?"
            },
            {
                name: "units",
                type: "input",
                message: "How many units would you like to purchase?",
            }
        ])
        .then(function (order) {
            connection.query("SELECT * FROM products WHERE item_id=?", order.itemID, function(err, res) {
                for (var i = 0; i < res.length; i++) {
    
                if (order.units > res[i].stock_quantity) {
                    console.log("Sorry there's not enough in stock to complete your order.");
                    start();
                } 
                else {
                    console.log("Great news! The product is in stock!");
                    console.log("=================================");
                    console.log("You've selected: ");
                    console.log("Item: " + res[i].product_name);
                    console.log("Department: " + res[i].department_name);
                    console.log("Price: " + "$" + res[i].price);
                    console.log("Quantity: " + order.units);
                    console.log("==========================");
                    console.log("Total: " + "$" + res[i].price * order.units);
                    console.log("===================================");
                    
                    var newStock = (res[i].stock_quantity - order.units);
                    var purchaseId = (order.itemID);
                    updateInventory(newStock, purchaseId);

                }
            }          
        });            
    });
}

// ----------------------- UPDATE INVENTORY WHEN CUSTOMER HAS PURCHASED AN ITEM ------------------------ //
function updateInventory(newStock, purchaseId) {

    inquirer.prompt([{

        type: "confirm",
        name: "confirmPurchase",
        message: "Are you ready to purchase your item(s) now?",
        default: true

    }]).then(function(userPurchase) {
        if (userPurchase.confirmPurchase === true) {

            //if user confirms purchase, update mysql database with new stock quantity by subtracting user quantity purchased.

            connection.query("UPDATE products SET ? WHERE ?", [{
                stock_quantity: newStock
            }, {
                item_id: purchaseId
            }], function(err, res) {});

            console.log("=================================");
            console.log("Transaction completed. Thank you.");
            console.log("=================================");
            start();
        } else {
            console.log("=================================");
            console.log("Please come again!");
            console.log("=================================");
            start();
        }
    });
}