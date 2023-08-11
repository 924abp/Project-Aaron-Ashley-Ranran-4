const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("cooking", "postgres", "lego", {
    host: "localhoast",
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