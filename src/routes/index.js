// Import our Controllers
const extractArticlesContoller = require('../controllers/extractArticlesController')

const routes = [
    /*************************************************************************************/
    /************************** Article ROUTES BEGIN ************************************/
    /***********************************************************************************/
    {
        method: 'GET',
        url: '/api/articles',
        handler: extractArticlesContoller.getArticles
    },
    {
        method: 'POST',
        url: '/api/articleContent',
        handler: extractArticlesContoller.getArticleContent
    }

]

module.exports = routes