const {Datatypes} = require('sequelize');

const sequelize = require('.../database/db');

const test = sequelize.define('test', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
        },
    name: {
        type: Sequelize.STRING,
        allowNull: false
        },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        },
})

module.exports = test;

    