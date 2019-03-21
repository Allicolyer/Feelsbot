cleanedText = text => {
  return text.replace(/(\r\n|\n|\r)/gm, " ").replace(/['"]+/g, "");
};

module.exports = cleanedText;
