const ElMassa = require("./news_sources/El_Massa");
const axios = require('axios');
const cheerio = require('cheerio');
const boom = require('boom')

let getData = (html, category) => {
    const articles = [];
    const $ = cheerio.load(html);
    $('.item-list .item-list-row').each((i, article) =>{

        articles.push({
            id: i,
            img:  $(article).find('article .item-image a img').attr('src'),
            url: $(article).find('article .item-image a').attr('href'),
            title: $(article).find('article .item-image a').attr('title'),
            date: $(article).find('article .item-content .item-date time').attr('datetime'),
            category: category,
            source: "المساء"
        });
    });
    return articles;
}

getPoliticsArticles = async () => {
    axios.get(ElMassa.categories.POLITICS.url)
        .then(response => {
            //console.log(getData(response.data, "POLITICS"))
            return getData(response.data, "POLITICS");
        })
        .catch(error => {
            console.log(error);
        })
}

exports.getSportsArticles = async () => {
    axios.get(ElMassa.categories.SPORTS.url)
        .then(response => {
            console.log(getData(response.data, "SPORTS"));
        })
        .catch(error => {
            console.log(error);
        })
}

exports.getTechArticles = async () => {
    return []
}

exports.getCultureArticles = async () => {
    axios.get(ElMassa.categories.CULTURE.url)
        .then(response => {
            return getData(response.data, "CULTURE");
        })
        .catch(error => {
            console.log(error);
        })
}

exports.getEconomyArticles = async () => {
    axios.get(ElMassa.categories.ECONOMY.url)
        .then(response => {
            return getData(response.data, "ECONOMY");
        })
        .catch(error => {
            console.log(error);
        })
}

exports.getHealthArticles = async () => {
    return []
}

exports.getInternationalArticles = async () => {
    axios.get(ElMassa.categories.INTERNATIONAL.url)
        .then(response => {
            return getData(response.data, "INTERNATIONAL");
        })
        .catch(error => {
            console.log(error);
        })
}


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
        content:  $('.itemIntroText .p1').text()

    }

    return articleData;

}






