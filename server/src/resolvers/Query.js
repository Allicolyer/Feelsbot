const cities = require("./cityData.js");
const { tweets } = require("./api-calls");
const { emotion } = require("./api-calls");

const Query = {
  tweets: (parent, args) => tweets(args.lat, args.lng, args.m),
  emotion: (parent, args) => emotion(args.text),
  cities: () => cities,
  findCity: (parent, args) => cities.filter(city => city.name === args.name)
};

module.exports = Query;
