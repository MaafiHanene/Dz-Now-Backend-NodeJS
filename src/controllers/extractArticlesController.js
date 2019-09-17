const boom = require('boom')
const elWatanWebScraper = require('../web_scrapers/elWatanWebScraper')
const lExpressionsWebScraper = require('../web_scrapers/lExpressionWebScrapper')
// Get all articles
exports.getArticles = async (req, reply) => {
    try {
        const category = req.query.category;
        console.log(category)
        let articles = [];

        switch (category) {
            case  "POLITICS":
                let articles__ = await  elWatanWebScraper.getPoliticsArticles()
                articles = articles__;
                break;
            case  "SPORT":
                articles = await elWatanWebScraper.getSportsArticles();
                break;

            case  "TECH":
                articles = await elWatanWebScraper.getTechArticles();
                break;
            case  "HEALTH":
                articles = await elWatanWebScraper.getHealthArticles();
                break;
            case  "INTERNATIONAL":
                articles = await elWatanWebScraper.getInternationalArticles();
                break;

            case  "CULTURE":
                articles = await elWatanWebScraper.getCultureArticles();
                break;
            case  "ECONOMY":
                articles = await elWatanWebScraper.getEconomyArticles();
                break;
        }
    while (articles==null) {}
    return articles;

    } catch (err) {
        throw boom.boomify(err);
    }
}


// Get article content from source and url
exports.getArticleContent = async (req, reply) => {
    try {
        const url = req.body.url;
        const source = req.body.source;
        let articleContent;

        switch (source) {
            case  "ElWatan":
                articleContent = await  elWatanWebScraper.getArticleContent(url);

                break;
            case  "Expression":
                articleContent = await elWatanWebScraper.getArticleContent(url);
                break;

            case  "المساء":
                articleContent = await elWatanWebScraper.getArticleContent(url);
                break;
        }
        return articleContent;

    } catch (err) {
        throw boom.boomify(err);
    }
}

exports.getVideos = async (req, res) => {
    let videos = await lExpressionsWebScraper.getVideos();
    //console.log(videos);
    return videos;

}

exports.getVideoUrl = async (req, res) => {
    let url = req.body.url;
    let videoUrl = await lExpressionsWebScraper.getVideo(url);
    //console.log(video);
    return videoUrl;
}



