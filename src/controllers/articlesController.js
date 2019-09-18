// External Dependancies
const boom = require('boom')

// Get Data Models
const db = require('../config/db.js');
const Article = db.articles;

// Get all saved articles
exports.getArticles = async (req, reply) => {
    const userId = req.body.userId;
    try {
        const articles = await Article.find({where: { userId: userId }});
        return articles
    } catch (err) {
        throw boom.boomify(err)
    }
}


// Add a new article
exports.createArticle = async (req, reply) => {
    try {
        const article = Article.create(req.body)
        return article
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Delete an article
exports.deleteArticle = async (req, reply) => {
    try {
        const id = req.params.id
        const company = await Article.destroy({where: { id: id }})
        return company
    } catch (err) {
        throw boom.boomify(err)
    }
}