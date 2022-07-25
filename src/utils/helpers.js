export const tweetSorter = input => {
  let rating = {};
  let keys = ["joy", "sadness", "fear", "anger", "disgust"];
  //removes any entries that are 0 and records how many there are
  rating.loading = false;
  //resets the total to zero
  rating.total = 0;
  //creates a new array that sorts each tweet by its category
  keys.forEach(key => {

  let filter = input.filter(a => {
    if (a.emotion != null) {
      return a.emotion.category === key
    } else {
      return false
    }
  });
    rating[key] = {
      num: filter.length,
      tweets: filter
    };
    //keeps track of the total tally of tweets
    rating.total += filter.length;
  });
  return rating;
};

export const percent = input => {
  let percentage =
    Math.round(
      (input.joy.num /
        (input.joy.num +
          input.anger.num +
          input.sadness.num +
          input.fear.num +
          input.disgust.num)) *
        100
    ) || 0;
  return percentage;
};

export const assignMood = input => {
  let mood;
  if (input === "-") {
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
