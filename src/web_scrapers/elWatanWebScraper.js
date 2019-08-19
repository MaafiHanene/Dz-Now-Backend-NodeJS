const ElWatan = require("./news_sources/El_Watan");
const axios = require('axios');
const cheerio = require('cheerio');
const boom = require('boom')

exports.getPoliticsArticles = async () => {
    let response = await axios.get(ElWatan.categories.POLITICS.url);
    let articles = getData(response.data, "POLITICS");
    console.log(articles);
    return articles;
}

exports.getSportsArticles = async () => {
    let response = await axios.get(ElWatan.categories.SPORTS.url);
    let articles = getData(response.data, "SPORTS");
    console.log(articles);
    return articles;
}

exports.getTechArticles = async () => {
    return []
}

exports.getCultureArticles = async () => {
    let response = await axios.get(ElWatan.categories.CULTURE.url);
    let articles = getData(response.data, "CULTURE");
    console.log(articles);
    return articles;
}

exports.getEconomyArticles = async () => {
    let response = await axios.get(ElWatan.categories.ECONOMY.url);
    let articles = getData(response.data, "ECONOMY");
    console.log(articles);
    return articles;
}

exports.getHealthArticles = async () => {
    let response = await axios.get(ElWatan.categories.HEALTH.url);
    let articles = getData(response.data, "HEALTH");
    console.log(articles);
    return articles;
}

exports.getInternationalArticles = async () => {
    let response = await axios.get(ElWatan.categories.INTERNATIONAL.url);
    let articles = getData(response.data, "INTERNATIONAL");
    console.log(articles);
    return articles;
}

exports.getAllArticles = async () => {
    let allArticles  = {}
    try{
         allArticles = {
            INTERNATIONAL: await getInternationalArticles(),
            HEALTH: await getHealthArticles(),
            ECONOMY: await getEconomyArticles(),
            CULTURE: await getCultureArticles(),
            TECH: await getTechArticles(),
            POLITICS: await getPoliticsArticles(),
            SPORTS: await getSportsArticles()
        };    
    }
    catch (err) {
        throw boom.boomify(err)
    }
    
    return allArticles;

}

getData = (html, category) => {
    const articles = [];
    const $ = cheerio.load(html);
    $('.posts article').each( (i, article) =>{

        articles.push({
            id: i,
            img:  $(article).find('figure a img').attr('src')+"",
            url: $(article).find('h3 a').attr('href'),
            title: $(article).find('h3 a').text(),
            date: $(article).find('.meta-tp-2 .date').text().replace('\n', ''),
            category: category
        });
    });
    return articles;
}

/*let getArticleDate = async (url) => {
    axios.get(url)
        .then(response => {
           // console.log(response.data)
            return getDate(response.data)
        })
        .catch(error => {
            console.log(error);
        });
}

let getDate = function (html)  {
    const $ =  cheerio.load(html);
    let dateText = $('.date-tp-4').text().replace('\n', '');
    console.log(dateText);
    return dateText;

}*/

exports.getArticleContent = async (url) => {
    axios.get(url)
        .then(response => {

            //console.log(getArticleData(response.data))
            return getArticleData(response.data);
        })
        .catch(error => {
            console.log(error);
        })
}


getArticleData = (html) => {
    let articleData = {};
    const $ = cheerio.load(html);
    articleData = {
        content:  $('.article .texte p').text()

    }

    return articleData;

}






