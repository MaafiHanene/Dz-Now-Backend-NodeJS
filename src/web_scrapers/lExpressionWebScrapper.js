const Expression = require("./news_sources/Lexpression");
const axios = require('axios');
const cheerio = require('cheerio');
const boom = require('boom')
const Browser = require('zombie')

Browser.localhost("https://www.lexpressiondz.com/videos/gaid-salah-personne-n-a-le-pouvoir-d-entraver-la-marche-de-l-algerie-67", "")
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
            category: category,
            source: "Expression"
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

exports.getArticleContent = async (url) => {
    // console.log("response axios", url)
    let response = await axios.get(url);
    // console.log("response axios", response)
    let articleContent = getArticleData(response.data);
    return articleContent;
}


getArticleData = (html) => {
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
        getVideo(urlArticle).then(url, function () {
            videos[videos.length - 1]["url"] = url
        });

    });
    //s console.log(videos);
    return videos;
}
exports.getVideo = async (url) => {
    let response = await axios.get(url);
    let articles = getVideoLink(response.data);
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






