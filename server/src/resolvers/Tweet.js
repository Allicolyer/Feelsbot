const { emotion } = require("./api-calls");

const Tweet = {
  emotion: parent => emotion(parent.text)
};

module.exports = Tweet;
