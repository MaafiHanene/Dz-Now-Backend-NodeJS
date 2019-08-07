// Get Data Models
const db = require('../config/db.js')

//Article DB Schema
module.exports = (sequelize, Sequelize) => {
    const companySchema = sequelize.define('Article', {
        title: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        urlOrigin: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        location: {
            type: Sequelize.STRING,
            allowNull: false
        },
        phoneNumber: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING
        }
    })
    companySchema.associate = function(models){
        models.companies.hasMany(models.qrCodeTags, {
            as: 'qrCodeTags',
            foreignKey: 'companyId'
        })
    }


    return companySchema

}

