-- Drops the bamazon_db if it already exists --
DROP DATABASE IF EXISTS bamazon_db;
-- Create a database called bamazon_db --
CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products(
  item_id INTEGER(11) NOT NULL,
  product_name VARCHAR(50),
  department_name VARCHAR(30),
  price INTEGER(8),
  stock_quantity INTEGER(11)
);

-- Creates new rows
INSERT INTO bamazon_db (item_id, product_name, department_name, price, stock_quantity)
VALUES (0, "IPhone 6 case", "Phone Accessories", $20.99, 200);

INSERT INTO bamazon_db (item_id, product_name, department_name, price, stock_quantity)
VALUES (0, "IPhone 6Plus case", "Phone Accessories", $24.99, 300);

INSERT INTO bamazon_db (item_id, product_name, department_name, price, stock_quantity)
VALUES (0, "IPhone 8 case", "Phone Accessories", $30.99, 250);

INSERT INTO bamazon_db (item_id, product_name, department_name, price, stock_quantity)
VALUES (0, "IPhone 8Plus case", "Phone Accessories", $35.99, 201);

INSERT INTO bamazon_db (item_id, product_name, department_name, price, stock_quantity)
VALUES (0, "IPhone 10 case", "Phone Accessories", $40.99, 156);

INSERT INTO bamazon_db (item_id, product_name, department_name, price, stock_quantity)
VALUES (0, "IPhone 10 case", "Phone Accessories", $45.99, 104);

INSERT INTO bamazon_db (item_id, product_name, department_name, price, stock_quantity)
VALUES (0, "Acme Canvas/Leather Messenger Bag", "Handbags and Accessories", $60.00, 50);

INSERT INTO bamazon_db (item_id, product_name, department_name, price, stock_quantity)
VALUES (0, "Acme Leather Computer Bag", "Handbags and Accessories", $105.00, 32);

INSERT INTO bamazon_db (item_id, product_name, department_name, price, stock_quantity)
VALUES (0, "Acme Leather Men's Bi-fold Wallet w/Money Clip", "Handbags and Accessories", $30.00, 15);

INSERT INTO bamazon_db (item_id, product_name, department_name, price, stock_quantity)
VALUES (0, "Acme Leather Women's Tri-fold Wallet w/Money Clip", "Handbags and Accessories", $35.99, 25);