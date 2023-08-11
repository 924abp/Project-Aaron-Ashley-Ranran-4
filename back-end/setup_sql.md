CREATE DATABASE cooking;

-- \c ecommerce -> to access the database

CREATE TABLE authors (
    id SERIAL NOT NULL,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    PRIMARY KEY (id)
);

CREATE TABLE recipes (
    id SERIAL NOT NULL,
    name VARCHAR(255) NOT NULL,
    author_id INT,
    ingredients TEXT,
    instructions TEXT,
    PRIMARY KEY (id),
    FOREIGN KEY (author_id) 
        REFERENCES authors(id)
        ON DELETE CASCADE 
        ON UPDATE CASCADE
);