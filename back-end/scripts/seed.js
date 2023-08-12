const { sequelize } = require("../modules/conn")

const dropRecipes = async() => {
    await sequelize.query('DROP TABLE recipes;')
}

const dropAuthors = async() => {
    await sequelize.query('DROP TABLE authors;')
}

const createRecipes = async() => {
    await sequelize.query(`
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
    `)
}

const createAuthors = async() => {
    await sequelize.query(`
        CREATE TABLE authors (
            id SERIAL NOT NULL,
            username VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            name VARCHAR(255),
            PRIMARY KEY (id)
        );
    `)
}

const rebuild = async() => {
    await dropAuthors()
}

console.log("------------------------------------")
rebuild()
// dropRecipes()
// dropAuthors()
