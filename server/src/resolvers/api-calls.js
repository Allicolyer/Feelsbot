const {
  search,
  userTimeline,
  searchAutocomplete
} = require("./twitterEndpoint");
const { analyze, blank } = require("./ibmEndpoint");

cleanedText = text => {
  return text.replace(/(\r\n|\n|\r)/gm, " ").replace(/['"]+/g, "");
};

tweets = async (lat, lng, miles) => {
  try {
    const result = await search({
      q: " ",
      geocode: `${lat},${lng},${miles}mi`
    });
    return JSON.parse(result).statuses;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

user = async screen_name => {
  try {
    const result = await userTimeline({ screen_name });
    return JSON.parse(result);
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
};

emotion = async text => {
  try {
    const result = await analyze(cleanedText(text));
    return result;
  } catch (err) {
    console.log(cleanedText(text));
    console.error(err);
    return blank;
  }
};

autocomplete = async text => {
  try {
    const result = await searchAutocomplete(text);
    return JSON.parse(result);
  } catch (err) {
    console.error(err);
    return;
  }
};

module.exports = {
  tweets,
  emotion,
  user,
  autocomplete
};
