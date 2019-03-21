const cleanedText = require("./cleanedText");
const fetch = require("node-fetch");
const urls = require("./urls");

const Query = {
  tweets: (parent, args) => {
    const { lat, lng, m } = args;
    return fetch(`${urls.twitter}&geocode=${lat},${lng},${m}mi`)
      .then(res => res.json())
      .then(r => r.statuses);
  },
  emotion: (parent, args) => {
    const { text } = args;
    return fetch(`${urls.ibm}`, {
      body: `{"text":"${cleanedText(text)}","features":{"emotion":{}}}`,
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(res => res.json())
      .then(r => [r.emotion.document.emotion]);
  }
};

module.exports = Query;
