const { DataTypes } = require("sequelize")
const { sequelize } = require("./conn")

const Recipe = sequelize.define("category", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    instructions: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true
})

module.exports = Recipe