const Emotion = {
  category: parent => categorize(parent)
};

module.exports = Emotion;

const categorize = parent => {
  let max = Math.max(
    parent.anger,
    parent.disgust,
    parent.fear,
    parent.joy,
    parent.sadness
  );
  if (max > 0.6) {
    return getKeyByValue(parent, max);
  } else return null;
};

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

module.exports = Emotion;
