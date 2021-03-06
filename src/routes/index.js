// Import our Controllers
const extractArticlesContoller = require('../controllers/extractArticlesController')

const articlesContoller = require('../controllers/articlesController')

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
    },
    {
        method: 'GET',
        url: '/api/videos',
        handler: extractArticlesContoller.getVideos
    },
    {
        method: 'POST',
        url: '/api/videoUrl',
        handler: extractArticlesContoller.getVideoUrl
    },
    {
        method: 'GET',
        url: '/api/saved-articles/:userId',
        handler: articlesContoller.getArticles
    },
    {
        method: 'POST',
        url: '/api/saved-articles',
        handler: articlesContoller.createArticle
    },
    {
        method: 'DELETE',
        url: '/api/saved-articles/:id',
        handler: articlesContoller.deleteArticle
    },
]

module.exports = routes