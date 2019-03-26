const { emotion } = require("./api-calls");

const Tweet = {
  emotion: parent => emotion(parent.text),
  url: parent => `https://twitter.com/statuses/${parent.id_str}`
};

module.exports = Tweet;
