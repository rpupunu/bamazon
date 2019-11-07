DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

use bamazon_db;

CREATE TABLE products(
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(45) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
	price DECIMAL(6,2) DEFAULT 0,
    stock_quantity INT DEFAULT 0,
    product_sales DECIMAL(10,2) DEFAULT 0,
    PRIMARY KEY (item_id)
);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone 11", "Electronics", 599.99, 20),
("iPhone 11 Pro", "Electronics", 899.99, 15),
("Samsung Galaxy Pro", "Electronics", 799.99, 10),
("Apple Watch 5 Gold", "Electronics", 749.99, 30),
("Apple Watch 5 Stainless Steel", "Electronics", 749.99, 30),
("Twin Sheet Set", "Home Goods", 24.99, 20),
("Queen Sheet Set", "Home Goods", 34.99, 20),
("King Sheet Set", "Home Goods", 24.99, 20),
("Wine Glasses 4 Set", "Home Goods", 29.99, 20),
("Dinner Plate Set 16 Pieces", "Home Goods", 74.99, 10),
("Drinking Glasses 4 Set", "Home Goods", 14.99, 20),
("Denim Jeans", "Clothing", 79.99, 25),
("White Tee Shirt Fitted", "Clothing", 9.99, 30),
("Black Tee Shirt Fitted", "Clothing", 9.99, 30),
("Grey Tee Shirt Fitted", "Clothing", 9.99, 30),
("Sweatshirt", "Clothing", 19.99, 25),
("Boxer Briefs Set of 4", "Clothing", 39.99, 10),
("Golf Balls", "Sporting Goods", 49.99, 20),
("Golf Club Set", "Sporting Goods", 799.99, 10),
("Putter", "Sporting Goods", 134.99, 10),
("Driver", "Sporting Goods", 289.99, 30),
("Weight Lifting Bench", "Sporting Goods", 109.99, 5),
("Squat Rack", "Sporting Goods", 219.99, 5);


SELECT * FROM bamazon_db.products