const Emotion = {
    : parent => {
    let category = [];
    if (parent.anger > 0.5) {
      category.push("anger");
    }
    if (parent.disgust > 0.5) {
      category.push("disgust");
    }
    if (parent.fear > 0.5) {
      category.push("fear");
    }
    if (parent.joy > 0.5) {
      category.push("joy");
    }
    if (parent.sadness > 0.5) {
      category.push("sadness");
    }
    return category;
  }
};

module.exports = Emotion;
