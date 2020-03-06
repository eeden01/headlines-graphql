const moment = require('moment');
const got = require('got');
const cheerio = require('cheerio');
const newspapers = require('./newspapers.js');

const currentTime = Date.now();

const headlines = {
  day: Number(currentTime.add(1, 'hours').format("DD")),
  month: Number(currentTime.add(1, 'hours').format("MM")),
  year: Number(currentTime.add(1, 'hours').format("YYYY")),
  time: moment(currentTime.add(1, 'hours').format("LT")
};

async function getHeadline (url, path) {
  try {
    const response = await got(url);
    const data = response.body;
    const $ = cheerio.load(`${data}`);
    //DATA-START
    const headline = $(path).first().text();
    // DATA-END
    return headline;
  } catch (error) {
    console.log(error.response.body);
  }
};

async function fetchHeadlines () {

  for (let i = 0; i < newspapers.length; i++) {
    console.log(newspapers[i])
  }

  //   newspapers.map(async obj => {
  //     headlines[obj.newspaper] = await getHeadline(obj.url, obj.path);
  //   });
  //   return headlines;
  // }

}

fetchHeadlines();

module.exports = fetchHeadlines;
