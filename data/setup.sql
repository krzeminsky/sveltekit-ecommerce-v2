DROP TABLE IF EXISTS category;
DROP TABLE IF EXISTS color;
DROP TABLE IF EXISTS size;
DROP TABLE IF EXISTS stock;
DROP TABLE IF EXISTS product;
DROP TABLE IF EXISTS product_variant;
DROP TABLE IF EXISTS staff_member;
DROP TABLE IF EXISTS product_update_request;

CREATE TABLE category(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

CREATE TABLE color(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

CREATE TABLE size(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

CREATE TABLE stock(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    size_id INTEGER NOT NULL,
    amount INTEGER NOT NULL,

    FOREIGN KEY (size_id) REFERENCES size(id)
);

CREATE TABLE product(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category_id INTEGER NOT NULL,
    materials TEXT,
    description TEXT,

    FOREIGN KEY (category_id) REFERENCES category(id)
);

CREATE TABLE product_variant(
    id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    color_id INTEGER NOT NULL,
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

    FOREIGN KEY (author_ip) REFERENCES staff_member(ip),
    FOREIGN KEY (product_id) REFERENCES product(id)
);