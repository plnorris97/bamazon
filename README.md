# bamazon

## Summary

This project was made in Node and uses the MySQL database. The user answers a series of questions via the command line interface to search for and purchase products from the Bamazon store. 

## Instructions

1. Open your computer's terminal.
1. Navigate to the folder where the application `bamazonCustomer.js` is stored.
1. From the command line prompt run the file `node bamazonCustomer.js`.

1. The prompts will ask you the following questions: 

    * `Would you like to see all products available for sale?` Answer with a yes(Y) or no(N). If you answer yes, all current Bamazon items for sale will be displayed. If you answer no, Bamazon will say `"Thanks for stopping by!"`

    ![Bamazon - See Products Available](https://github.com/plnorris97/bamazon/blob/master/images/Prompt%201.png)
        
    * `Would you like to purchase an item?` Answer with a yes(Y) or no(N). If you answer yes, the next question will be asked. If you answer no, Bamazon will say `"Thank you! Come back soon!"`
        
    * `What is the ID of the item you would like to buy?` Answer with the corresponding Item ID number of the product. The next question will be displayed.

    * `How many units would you like to purchase?` Answer with the amount/number of units you wish to purchase. If the inventory is available you will receive a message saying the product is in stock and what your total purchase price is. The next question will confirm you are ready to purchase.

     ![Bamazon - Purchase, ID, Units](https://github.com/plnorris97/bamazon/blob/master/images/Prompt%202.png)

    * `Are you ready to purchase your items now?` Answer yes(Y) or no(N). If you answer yes, Bamazon will tell you your transaction is completed. If you answer no, you will receive a `"Please come again"` message.

    ![Bamazon - Purchase Confirm](https://github.com/plnorris97/bamazon/blob/master/images/Prompt_3.png)