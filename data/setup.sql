DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS color;
DROP TABLE IF EXISTS size;
DROP TABLE IF EXISTS material;
DROP TABLE IF EXISTS stock;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS product_variant;
DROP TABLE IF EXISTS staff_member;
DROP TABLE IF EXISTS product_update_request;

CREATE TABLE category(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

INSERT INTO category(name) VALUES("Skinny jeans");
INSERT INTO category(name) VALUES("Straight jeans");
INSERT INTO category(name) VALUES("Baggy jeans");
INSERT INTO category(name) VALUES("Sweatpants");
INSERT INTO category(name) VALUES("Baggy sweatpants");
INSERT INTO category(name) VALUES("Joggers");
INSERT INTO category(name) VALUES("Cargo pants");
INSERT INTO category(name) VALUES("T-shirts");
INSERT INTO category(name) VALUES("Shirts");
INSERT INTO category(name) VALUES("Jackets");
INSERT INTO category(name) VALUES("Sneakers");

CREATE TABLE color(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

INSERT INTO color(name) VALUES("White");
INSERT INTO color(name) VALUES("Gray");
INSERT INTO color(name) VALUES("Black");
INSERT INTO color(name) VALUES("Red");
INSERT INTO color(name) VALUES("Green");
INSERT INTO color(name) VALUES("Blue");
INSERT INTO color(name) VALUES("Yellow");
INSERT INTO color(name) VALUES("Pink");
INSERT INTO color(name) VALUES("Purple");
INSERT INTO color(name) VALUES("Magenta");
INSERT INTO color(name) VALUES("Brown");
INSERT INTO color(name) VALUES("Orange");

CREATE TABLE size(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

INSERT INTO size(name) VALUES("XS");
INSERT INTO size(name) VALUES("S");
INSERT INTO size(name) VALUES("M");
INSERT INTO size(name) VALUES("L");
INSERT INTO size(name) VALUES("XL");
INSERT INTO size(name) VALUES("2XL");
INSERT INTO size(name) VALUES("3XL");
INSERT INTO size(name) VALUES("4XL");
INSERT INTO size(name) VALUES("5XL");

CREATE TABLE material(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

INSERT INTO material(name) VALUES("Cotton");
INSERT INTO material(name) VALUES("Polyester");
INSERT INTO material(name) VALUES("Nylon");
INSERT INTO material(name) VALUES("Wool");
INSERT INTO material(name) VALUES("Leather");
INSERT INTO material(name) VALUES("Synthetic leather");

CREATE TABLE stock(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    size TEXT NOT NULL,
    amount INTEGER NOT NULL,

    FOREIGN KEY (size_id) REFERENCES size(id)
);

CREATE TABLE product(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    materials TEXT,
    description TEXT,

    FOREIGN KEY (category_id) REFERENCES category(id)
);

CREATE TABLE product_variant(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    color TEXT NOT NULL,
    stock_id INTEGER NOT NULL,
    gallery_map TEXT NOT NULL,

    FOREIGN KEY (color_id) REFERENCES color(id),
    FOREIGN KEY (stock_id) REFERENCES stock(id)
);

CREATE TABLE staff_member(
    ip TEXT NOT NULL PRIMARY KEY,
    level INTEGER NOT NULL,
    name TEXT NOT NULL,
    password TEXT NOT NULL
);

INSERT INTO staff_member VALUES('::1', 3, 'Head admin', 'xyz');

CREATE TABLE product_update_request(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    author_ip TEXT NOT NULL,
    product_id INTEGER NOT NULL,
    data TEXT NOT NULL,
    status INTEGER NOT NULL,

    FOREIGN KEY (author_ip) REFERENCES staff_member(ip),
    FOREIGN KEY (product_id) REFERENCES product(id)
);