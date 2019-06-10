export const tweetSorter = input => {
  let rating = {};
  let keys = ["joy", "sadness", "fear", "anger", "disgust"];
  //removes any entries that are 0 and records how many there are
  rating.total = input.filter(a => a.emotion.joy).length;
  //creates a new array that sorts each tweet by it's category
  keys.forEach(key => {
    let filter = input.filter(a => a.emotion[key] > 0.6);
    rating[key] = {
      num: filter.length,
      tweets: filter
    };
  });
  return rating;
};

export const percent = input => {
  let percentage = 0;
  percentage = Math.floor(
    (input.joy.num /
      (input.joy.num +
        input.anger.num +
        input.sadness.num +
        input.fear.num +
        input.disgust.num)) *
      100
  );
  return percentage;
};

export const assignMood = input => {
  let mood;
  if (input == "-") {
    mood = "loading";
  } else if (input < 50) {
    mood = "sad";
  } else if (input < 75) {
    mood = "neutral";
  } else {
    mood = "happy";
  }
  return mood;
};
