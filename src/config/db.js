const env = require("./env")
const Sequelize = require('sequelize')

const sequelize = new Sequelize(env.getDataBase(), env.getDataBaseUserName(), env.getDataBasePassword(), {
    host: env.getDataBaseHost(),
    dialect: env.getDataBaseDialect(),
    operatorsAliases: false,
    pool: env.getDataBasePool(),
    secret: env.getAuthSecret()
})

const db = {};

//Models/tables
db.articles = require('../models/article.js')(sequelize, Sequelize)

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.Sequelize = Sequelize
db.sequelize = sequelize

module.exports = db