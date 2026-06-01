-- CREATE SCHEMA eStore_Schema;

-- Create table eStore_Schema.categories(
-- id int not null,
-- category varchar(45) default null,
-- parent_category_id int default null,
-- primary key(id)
-- );


-- insert into eStore_Schema.categories (id,category,parent_category_id) values 
-- (1,'Men',null),
-- (2,'Women',null),
-- (3,'kids', null),
-- (4,'casual wear', 1),
-- (5,'party wear',2),
-- (6,'foot wear',2),
-- (7,'Accessories',3);

-- SELECT * FROM eStore_Schema.categories;


-- CREATE TABLE eStore_Schema.products (
--     id INT NOT NULL,
--     product_name VARCHAR(45) DEFAULT NULL,
--     product_description VARCHAR(100) DEFAULT NULL,
--     price DECIMAL(10,0) DEFAULT NULL,
--     ratings INT DEFAULT NULL,
--     category_id INT DEFAULT NULL,
--     product_img VARCHAR(45),
    
--     PRIMARY KEY (id),

--     CONSTRAINT FK_Products_Categories 
--         FOREIGN KEY (category_id) 
--         REFERENCES eStore_Schema.categories (id) 
--         ON UPDATE CASCADE 
--         ON DELETE CASCADE
-- );

-- insert into eStore_Schema.products(id, product_name,product_description,price,ratings,category_id,product_img )
-- values (2, 't-shirt', 'comfortable cotton t-shirt', 50, 4, 3, 'shop-2.jpg'),
-- (3, 'jeans', 'blue denim jeans', 120, 4, 4, 'shop-3.jpg'),
-- (4, 'shoes', 'running sports shoes', 150, 5, 2, 'shop-4.jpg'),
-- (5, 'watch', 'stylish wrist watch', 200, 5, 1, 'shop-5.jpg'),
-- (6, 'cap', 'casual baseball cap', 25, 3, 3, 'shop-6.jpg'),
-- (7, 'sunglasses', 'UV protection sunglasses', 75, 4, 2, 'shop-7.jpg'),
-- (8, 'hoodie', 'hooded sweatshirt', 130, 5, 5, 'shop-8.jpg'),
-- (9, 'belt', 'leather belt', 60, 4, 1, 'shop-9.jpg'),
-- (10, 'bag', 'travel backpack', 180, 5, 4, 'shop-10.jpg');




