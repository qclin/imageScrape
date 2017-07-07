var request = require('request');
var fs = require('fs');
var Scraper = require ('images-scraper')
  , bing = new Scraper.Bing();

var sets = [
  "great wall of flames",
  "chastity",
  "sexual desire",
  "Liturgy of the Hours",
  "Gluttonous",
  "The stoning of Saint Stephen",
  "acrid smoke",
  "fire wrath",
  "stoning people",
  "Marriage at Cana ",
  "Building the Tower of Babel",
  "mine workers",
  "Annunciation",
  "Indolent",
  "Last Rites",
  "troubadour",
  "early hours of morning",
  "Detainment",
  "base of the cliff"
]

for (i = 0; i < sets.length; i++) {
  var keyword = sets[i]
  listFile(keyword)
}

function listFile(keyword){

  bing.list({
      keyword: keyword,
      num: 1000,
      detail: true
  })
  .then(function (res) {
    for (i = 0; i < res.length; i++) {
      var item = res[i];
      writeLog(item, keyword)
    }
  }).catch(function(err) {
      console.log('err',err);
  })
}

function writeLog(json, keyword){
  var url = json.url
  console.log("url  --- ",url )
  fs.appendFile(`log-Bing-${keyword}.txt`, url+"\r\n", function (err) {
  if (err) {
    // append failed
  } else {
    // done
  }
  })
}
