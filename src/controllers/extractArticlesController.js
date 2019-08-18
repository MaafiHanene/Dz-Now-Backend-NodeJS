const boom = require('boom')
const elWatanWebScraper = require('../web_scrapers/elWatanWebScraper')

// Get all companies
exports.getArticles = async (req, reply) => {
    try {
        const category = req.query.category;
        console.log(category)
        let articles = [];

        switch (category) {
            case  "POLITICS":
                let articles__ = await  elWatanWebScraper.getPoliticsArticles()
                console.log("article"+articles__);
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
