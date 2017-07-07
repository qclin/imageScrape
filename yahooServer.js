var request = require('request');
var fs = require('fs');
var Scraper = require ('images-scraper')
  , yahoo = new Scraper.Yahoo();

var sets = [
  "Moon Surface",
  "Moon Nasa",
  "Full Moon",
  "Crescent Moon",
  "Mercury planet",
  "Mercury planet (black and white)",
  "Venus planet",
  "venus surface",
  "the sun nasa",
  "the sun",
  "mars nasa",
  "mars surface",
  "mars planet",
  "jupiter nasa",
  "jupiter planet",
  "jupiter surface",
  "jupiter texture",
  "saturn planet",
  "saturn nasa",
  "saturn rings",
  "saturn cassini",
  "star cluster",
  "star cluster nasa"
]

// for (i = 0; i < sets.length; i++) {
//   var keyword = sets[i]
//   listFile(keyword)
// }

function listFile(keyword){

  yahoo.list({
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
  fs.appendFile(`log-Yahoo-${keyword}.txt`, url+"\r\n", function (err) {
  if (err) {
    // append failed
  } else {
    // done
  }
  })
}
