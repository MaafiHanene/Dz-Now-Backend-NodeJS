const ElWatan = require("./news_sources/El_Watan");
const axios = require('axios');
const cheerio = require('cheerio');
const boom = require('boom')

exports.getPoliticsArticles = async () => {
    axios.get(ElWatan.categories.POLITICS.url)
        .then(response => {
            return getData(response.data, "POLITICS");
        })
        .catch(error => {
            console.log(error);
        })
}

exports.getSportsArticles = async () => {
    axios.get(ElWatan.categories.SPORTS.url)
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
    axios.get(ElWatan.categories.CULTURE.url)
        .then(response => {
            return getData(response.data, "CULTURE");
        })
        .catch(error => {
            console.log(error);
        })
}

exports.getEconomyArticles = async () => {
    axios.get(ElWatan.categories.ECONOMY.url)
        .then(response => {
            return getData(response.data, "ECONOMY");
        })
        .catch(error => {
            console.log(error);
        })
}

exports.getHealthArticles = async () => {
    axios.get(ElWatan.categories.HEALTH.url)
        .then(response => {
            console.log(getData(response.data, "HEALTH"))
            return getData(response.data, "HEALTH");
        })
        .catch(error => {
            console.log(error);
        })
}

exports.getInternationalArticles = async () => {
    axios.get(ElWatan.categories.INTERNATIONAL.url)
        .then(response => {
            return getData(response.data, "INTERNATIONAL");
        })
        .catch(error => {
            console.log(error);
        })
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






