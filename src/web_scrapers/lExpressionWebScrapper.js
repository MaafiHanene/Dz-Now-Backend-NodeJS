const Expression = require("./news_sources/Lexpression");
const axios = require('axios');
const cheerio = require('cheerio');
const boom = require('boom')

getData___ = (html, category) => {
    const articles = [];
    const $ = cheerio.load(html);
    $('.list-categories li').each( (i, article) =>{

        articles.push({
            id: i,
            img:  $(article).find('figure img').attr('src'),
            url: $(article).find('header h2 a').attr('href'),
            title: $(article).find('header p').text().split('\n')[5] + '\n' + $(article).find('header h2 a').text(),
            date: $(article).find('header p span').text().split('\n')[2],
            category: category,
            source: "Expression"
        });
    });
    return articles;
}

exports.getPoliticsArticles = async () => {
   
    let response = await axios.get(Expression.categories.POLITICS.url);
    let articles = getData___(response.data, "POLITICS");
    console.log(articles);
    return articles;
}

exports.getSportsArticles = async () => {


    let response = await axios.get(Expression.categories.SPORTS.url);
    let articles = getData___(response.data, "SPORTS");
    console.log(articles);
    return articles;
}

exports.getTechArticles = async () => {
    return []
}

exports.getCultureArticles = async () => {
   
    let response = await axios.get(Expression.categories.CULTURE.url);
    let articles = getData___(response.data, "CULTURE");
    console.log(articles);
    return articles;
}


exports.getEconomyArticles = async () => {

    let response = await axios.get(Expression.categories.ECONOMY.url);
    let articles = getData___(response.data, "ECONOMY");
    console.log(articles);
    return articles;
}

exports.getHealthArticles = async () => {
    return []
}

exports.getInternationalArticles = async () => {

    let response = await axios.get(Expression.categories.INTERNATIONAL.url);
    let articles = getData___(response.data, "INTERNATIONAL");
    console.log(articles);
    return articles;
}

exports.getArticleContent = async (url) => {
    // console.log("response axios", url)
    let response = await axios.get(url);
    // console.log("response axios", response)
    let articleContent = getArticleData___(response.data);
    return articleContent;
}


getArticleData___ = (html) => {
    let articleData = {};
    const $ = cheerio.load(html);
    articleData = {
        content:  $('article .module-article div p').text()

    }

    return articleData;
}

getVideoData = (html) => {
    const videos = [];
    const $ = cheerio.load(html);
    $('.video').each(  (i, article) =>{
        videos.push({
            url:$(article).find('figure a').attr('href'),
            title: $(article).text().split('\n')[11],
            source: "Expression",
            date: $(article).text().split('\n')[9],
            img: $(article).find('figure a img').attr('src')
        });

    });
    //s console.log(videos);
    return videos;
}
exports.getVideo = async (url) => {
    let response = await axios.get(url);
    let articles = {videoUrl: getVideoLink(response.data)};
    return articles;
}

getVideoLink = (html) => {
    const videos = [];
    const $ = cheerio.load(html);
    $('script').each( (i, article) =>{
        videos.push({
            script: $(article).toString().split('\'')[9]
        });
    });
    const $1 = cheerio.load(videos[3]["script"])
    let link = $1('iframe').attr("src")
    //console.log("link"+link)
    return link;
}




exports.getVideos = async () => {
    let response = await axios.get(Expression.url);
    let articles = getVideoData(response.data);
    return articles;
}






