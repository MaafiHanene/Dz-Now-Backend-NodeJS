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
            type: Sequelize.TEXT,
            allowNull: false,
            unique: true
        },
        img: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        content: {
            type: Sequelize.TEXT,
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
        },
        url:{
          type: Sequelize.TEXT,
            allowNull: false  
        }
    })

    return articleSchema;

}

