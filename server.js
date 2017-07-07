var request = require('request');
var fs = require('fs');
var Scraper = require ('images-scraper')
  , google = new Scraper.Google();
  // , bing = new Scraper.Bing();


// enter your own key owns
var sets = [
  "avarice",
  "covetous eyes ",
  "acedia (sloth)",
  "dejection"
]

for (i = 0; i < sets.length; i++) {
  var keyword = sets[i]
  listFile(keyword)
}

function listFile(keyword){
  google.list({
    keyword: keyword,
    num: 1000, // set # of requests 
    detail: true,
    nightmare: {
        show: true
    }
  })
  .then(function (responses) {
      console.log('first 10 results from google', responses);
      for (i = 0; i < responses.length; i++) {
        var item = responses[i];
        var name = keyword+i.toString()
        download(item, name, keyword)
      }
  }).catch(function(err) {
      console.log('err', err);
  });

  // you can also watch on events
  google.on('result', function (item) {
      console.log('out', item);
  });
}



function download(json, name, keyword){
  var url = json.url
  console.log(" url  --- ",url )
  fs.appendFile(`log-google-${keyword}.txt`, url+"\r\n", function (err) {
  if (err) {
    // append failed
  } else {
    // done
  }
  })
}
