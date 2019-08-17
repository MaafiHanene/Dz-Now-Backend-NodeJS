const Expression = require("./news_sources/Lexpression");
const axios = require('axios');
const cheerio = require('cheerio');
const boom = require('boom')

let getData = (html, category) => {
    const articles = [];
    const $ = cheerio.load(html);
    $('.list-categories li').each( (i, article) =>{

        articles.push({
            id: i,
            img:  $(article).find('figure img').attr('src'),
            url: $(article).find('header h2 a').attr('href'),
            title: $(article).find('header p').text().split('\n')[5] + '\n' + $(article).find('header h2 a').text(),
            date: $(article).find('header p span').text().split('\n')[2],
            category: category
        });
    });
    return articles;
}

exports.getPoliticsArticles = async () => {
    axios.get(Expression.categories.POLITICS.url)
        .then(response => {
            console.log(getData(response.data, "POLITICS"))
           // return getData(response.data, "POLITICS");
        })
        .catch(error => {
            console.log(error);
        })
}

exports.getSportsArticles = async () => {
    axios.get(Expression.categories.SPORTS.url)
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
    axios.get(Expression.categories.CULTURE.url)
        .then(response => {
            return getData(response.data, "CULTURE");
        })
        .catch(error => {
            console.log(error);
        })
}

exports.getEconomyArticles = async () => {
    axios.get(Expression.categories.ECONOMY.url)
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
    axios.get(Expression.categories.INTERNATIONAL.url)
        .then(response => {
            return getData(response.data, "INTERNATIONAL");
        })
        .catch(error => {
            console.log(error);
        })
}





