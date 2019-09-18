const envVarsController = require("./env")
const Sequelize = require('sequelize')

const sequelize = new Sequelize(envVarsController.getDataBase(), envVarsController.getDataBaseUserName(), envVarsController.getDataBasePassword(), {
    host: envVarsController.getDataBaseHost(),
    dialect: envVarsController.getDataBaseDialect(),
    operatorsAliases: false,
    pool: envVarsController.getDataBasePool(),
    secret: envVarsController.getAuthSecret()
})

const db = {};

//Models/tables
db.articles = require('../models/article')(sequelize, Sequelize)


db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db