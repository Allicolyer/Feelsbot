const NaturalLanguageUnderstandingV1 = require('ibm-watson/natural-language-understanding/v1');
const { IamAuthenticator } = require('ibm-watson/auth');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2022-04-07',
  authenticator: new IamAuthenticator({
    apikey: `${process.env.IBM_API_KEY}`,
  }),
  serviceUrl: `${process.env.IBM_URL}`,
});


const blank = { joy: 0, sadness: 0, anger: 0, fear: 0, disgust: 0 };

function analyze (text, cb) {
  return naturalLanguageUnderstanding
    .analyze({
      html: `${text}`,
      features: {
        emotion: {}
      }
    })
    .then(response => {
      let result = response.result.emotion.document.emotion
      if (result != undefined) {
        return result
      }
    })
    .catch(err => {
      console.log('error: ', err)
    })
}


module.exports = { analyze, blank };