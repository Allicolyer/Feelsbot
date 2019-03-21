const cleanedText = require("./cleanedText");
const fetch = require("node-fetch");
const urls = require("./urls");

const Tweet = {
  emotion: parent => {
    const text = cleanedText(parent.text);
    return fetch(`${urls.ibm}`, {
      body: `{"text":"${text}","features":{"emotion":{}}}`,
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
      .then(res => res.json())
      .then(r => [r.emotion.document.emotion]);
  }
};

module.exports = Tweet;
