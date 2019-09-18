const boom = require('boom')
const elWatanWebScraper = require('../web_scrapers/elWatanWebScraper')
const lExpressionsWebScraper = require('../web_scrapers/lExpressionWebScrapper')
const elMassaWebScraper = require('../web_scrapers/elMassaWebScraper')
// Get all articles
exports.getArticles = async (req, reply) => {
    try {
        const category = req.query.category;
        console.log(category)
        let articles = [];
        let articles__
        let articles1
        let articles2
        switch (category) {
            case  "POLITICS":
                articles__ = await  elWatanWebScraper.getPoliticsArticles()
                 articles1 = await  elMassaWebScraper.getPoliticsArticles()
                //articles2 = await  lExpressionsWebScraper.getPoliticsArticles()
                articles = articles__.concat(articles1);
                break;
            case  "SPORT":
                articles__ = await elWatanWebScraper.getSportsArticles();
                articles1 = []//await  elMassaWebScraper.getSportsArticles()
                articles2 = await  lExpressionsWebScraper.getSportsArticles()
                articles = articles__.concat(articles1).concat(articles2);
                break;

            case  "TECH":
                articles__ = await elWatanWebScraper.getTechArticles();
                
                articles = articles__
                
                break;
            case  "HEALTH":
                
                articles__ = await elWatanWebScraper.getHealthArticles();
                
                articles = articles__.concat(articles1).concat(articles2);
                break;
            case  "INTERNATIONAL":
                
                articles__ = await elWatanWebScraper.getInternationalArticles();
                articles1 = await  elMassaWebScraper.getInternationalArticles()
                articles2 = []
                articles = articles__.concat(articles1);
                break;

            case  "CULTURE":
                
                 articles__ = await elWatanWebScraper.getCultureArticles();
               
                articles = articles__

                break;
            case  "ECONOMY":
                
                 articles__ = await elWatanWebScraper.getEconomyArticles();
               
                articles = articles__
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



