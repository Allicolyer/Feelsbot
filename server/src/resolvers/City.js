const { tweets } = require("./api-calls");

const City = {
  tweets: parent => tweets(parent.lat, parent.lng, parent.miles)
};

module.exports = City;
