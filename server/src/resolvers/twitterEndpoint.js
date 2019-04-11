
const Twitter = require('twitter-node-client').Twitter;
var {TWITTER_KEYS} = require("./keys")

const twitter = new Twitter({
	consumerKey: `${TWITTER_KEYS.consumerKey}`,
	consumerSecret: `${TWITTER_KEYS.consumerSecret}`,
	accessToken: `${TWITTER_KEYS.accessToken}`,
	accessTokenSecret: `${TWITTER_KEYS.accessTokenSecret}`,
	callBackUrl: `${TWITTER_KEYS.callBackUrl}`
});

function search({ q, geocode }, cb) {
  return new Promise((resolve, reject) => {
     return twitter.getSearch(
       {q, geocode, count: 100, lang: "en"},
       (error) => reject(error),
       (res) => resolve(res)
     )
   });
 }

 function userTimeline({screen_name}, cb) {
  return new Promise((resolve, reject) => {
    return twitter.getUserTimeline(
      {screen_name, count: 200},
      (error) => reject(error),
      (res) => resolve(res)
    )
  });
}

module.exports = {search, userTimeline};

