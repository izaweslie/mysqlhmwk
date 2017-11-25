USE bamazon;

SELECT * FROM bamazon.products;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NULL,
  department_name VARCHAR(45) NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "coffee", "beverages", 7.99, 25), 
(2, "tea", "beverages", 3.99, 30), 
(3, "DVD", "Entertainment", 10.99, 15), 
(4, "Blu-ray", "Entertainment", 24.99, 10), (5, "Bulls Hat", "Sports", 19.99, 4);
