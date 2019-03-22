const fetch = require("node-fetch");
const urls = require("./urls");

cleanedText = text => {
  return text.replace(/(\r\n|\n|\r)/gm, " ").replace(/['"]+/g, "");
};

tweets = (lat, lng, miles) => {
  return fetch(`${urls.twitter}&geocode=${lat},${lng},${miles}mi`)
    .then(res => res.json())
    .then(r => r.statuses);
};

emotion = text => {
  return fetch(`${urls.ibm}`, {
    body: `{"text":"${cleanedText(text)}","features":{"emotion":{}}}`,
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
  })
    .then(res => res.json())
    .then(r => {
      if (r.error) {
        return {
          joy: 0,
          sadness: 0,
          anger: 0,
          fear: 0,
          disgust: 0
        };
      } else {
        return r.emotion.document.emotion;
      }
    });
};

module.exports = {
  tweets,
  emotion
};
