const ElMassa = require("./news_sources/El_Massa");
const axios = require('axios');
const cheerio = require('cheerio');
const boom = require('boom')

getData__ = (html, category) => {
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

exports.getPoliticsArticles = async () => {
    let response = await axios.get(ElMassa.categories.POLITICS.url);
    let articles = getData__(response.data, "POLITICS");
    console.log(articles);
    return articles;
}

exports.getSportsArticles = async () => {
    
     let response = await axios.get(ElMassa.categories.SPORTS.url);
    let articles = getData__(response.data, "SPORTS");
    console.log(articles);
    return articles;
}

exports.getTechArticles = async () => {
    return []
}

exports.getCultureArticles = async () => {

     let response = await axios.get(ElMassa.categories.CULTURE.url);
    let articles = getData__(response.data, "CULTURE");
    console.log(articles);
    return articles;
}

exports.getEconomyArticles = async () => {

    let response = await axios.get(ElMassa.categories.ECONOMY.url);
    let articles = getData__(response.data, "ECONOMY");
    console.log(articles);
    return articles;
}

exports.getHealthArticles = async () => {
    return []
}

exports.getInternationalArticles = async () => {
    let response = await axios.get(ElMassa.categories.INTERNATIONAL.url);
    let articles = getData__(response.data, "INTERNATIONAL");
    console.log(articles);
    return articles;
}


exports.getArticleContent = async (url) => {
    // console.log("response axios", url)
    let response = await axios.get(url);
    // console.log("response axios", response)
    let articleContent = getArticleData__(response.data);
    return articleContent;
}


getArticleData__ = (html) => {
    let articleData = {};
    const $ = cheerio.load(html);
    articleData = {
        content:  $('.itemIntroText .p1').text()

    }

    return articleData;

}






