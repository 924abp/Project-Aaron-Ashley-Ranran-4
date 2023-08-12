const { Sequelize } = require("sequelize")

require('dotenv').config()

const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const host = process.env.DB_HOST
const port = process.env.DB_PORT

const sequelize = new Sequelize("cooking", user, password, {
    host: host,
    port: port,
    dialect: "postgres"
})

async function testConnection () {
    try {
        await sequelize.authenticate()
        console.log("Connected")
        return true
    } catch (error) {
        console.log("Connetion Failed:", error)
        return false
    }
}

module.exports = {sequelize, testConnection}