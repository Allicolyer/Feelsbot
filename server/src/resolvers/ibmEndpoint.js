var NaturalLanguageUnderstandingV1 = require("watson-developer-cloud/natural-language-understanding/v1.js");

var naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2018-11-16',
  iam_apikey: process.env.IBM_API_KEY,
  url: process.env.IBM_URL
})

const blank = { joy: 0, sadness: 0, anger: 0, fear: 0, disgust: 0 };

function analyze(text, cb) {
  return new Promise((resolve, reject) => {
    return naturalLanguageUnderstanding.analyze(
      {
        html: `${text}`, // Buffer or String
        features: {
          emotion: {}
        }
      },
      function(err, response) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          let result = response.emotion.document.emotion;
          resolve(result);
        }
      }
    );
  });
}

module.exports = { analyze, blank };
