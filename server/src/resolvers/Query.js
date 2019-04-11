const cities = require("./cityData.js");
const { tweets } = require("./api-calls");
const { emotion } = require("./api-calls");
const { user } = require("./api-calls");
const { autocomplete } = require("./api-calls");

const Query = {
  tweets: (parent, args) => tweets(args.lat, args.lng, args.m),
  emotion: (parent, args) => emotion(args.text),
  user: (parent, args) => user(args.screen_name),
  cities: () => cities,
  findCity: (parent, args) => cities.filter(city => city.name === args.name),
  autocomplete: (parent, args) => autocomplete(args.text)
};

module.exports = Query;
