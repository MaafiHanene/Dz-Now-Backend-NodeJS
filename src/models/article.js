// Get Data Models
const db = require('../config/db.js')

//hamlaSchema
module.exports = (sequelize, Sequelize) => {
    const articleSchema = sequelize.define('Article', {
        userId: {
            type: Sequelize.STRING,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        img: {
            type: Sequelize.STRING,
            allowNull: true
        },
        content: {
            type: Sequelize.STRING,
            allowNull: false
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false
        },
        source: {
            type: Sequelize.STRING,
            allowNull: false
        },
        date: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })

    return articleSchema;

}

