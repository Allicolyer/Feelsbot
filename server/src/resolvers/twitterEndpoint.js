const Twitter = require("twitter-node-client").Twitter;

const twitter = new Twitter({
  consumerKey: process.env.TWITTER_CONSUMER_KEY,
  consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  callBackUrl: '',
})
// Use the new twitter base URL for Twitter's new API
// twitter.baseUrl = 'https://api.twitter.com/2'
// Twitter has changed its end points for search, you'll have to use the new one
// function search ({ q, geocode }, cb) {
//   return new Promise((resolve, reject) => {
//     return twitter.getCustomApiCall(
//       '/tweets/search/recent',
//       { q, geocode, count: 100, lang: 'en' },
//       error => reject(error),
//       res => resolve(res)
//     )
//   })
// }

function search({ q, geocode }, cb) {
  return new Promise((resolve, reject) => {
    return twitter.getSearch(
      { q, geocode, count: 100, lang: "en" },
      error => reject(error),
      res => resolve(res)
    );
  });
}


function userTimeline({ screen_name }, cb) {
  return new Promise((resolve, reject) => {
    return twitter.getUserTimeline(
      { screen_name, count: 150 },
      error => reject(error),
      res => resolve(res)
    );
  });
}

function searchAutocomplete(q, cb) {
  return new Promise((resolve, reject) => {
    return twitter.getCustomApiCall(
      "/users/search.json",
      { q, count: 5 },
      error => reject(error),
      res => resolve(res)
    );
  });
}

module.exports = { search, userTimeline, searchAutocomplete };
