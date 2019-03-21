const fetch = require("node-fetch");
const urls = require("./urls");

const City = {
  tweets: parent => {
    return fetch(
      `${urls.twitter}&geocode=${parent.lat},${parent.lng},${parent.miles}mi`
    )
      .then(res => res.json())
      .then(r => r.statuses);
  }
};

module.exports = City;
