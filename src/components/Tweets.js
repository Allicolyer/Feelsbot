import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import HappyMeter from "./HappyMeter";
import TweetTable from "./TweetTable";

const GET_TWEETS = gql`
  query($lat: Float!, $lng: Float!, $m: Int!) {
    tweets(lat: $lat, lng: $lng, m: $m) {
      text
      url
      user {
        name
        location
        screen_name
      }
      emotion {
        joy
        sadness
        anger
        fear
        disgust
      }
    }
  }
`;

const Tweets = props => (
  <Query
    query={GET_TWEETS}
    variables={{ lat: props.lat, lng: props.lng, m: props.m }}
  >
    {({ loading, error, data }) => {
      // if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      let tweets = [];
      let rating = {
        total: "-",
        joy: { num: "-", tweets: [] },
        anger: { num: "-", tweets: [] },
        sadness: { num: "-", tweets: [] },
        fear: { num: "-", tweets: [] },
        disgust: { num: "-", tweets: [] }
      };
      let percentage = "-";
      if (!loading) {
        tweets = data.tweets;
        rating = sorter(tweets);
        percentage = Math.floor(
          (rating.joy.num / (rating.joy.num + rating.sadness.num)) * 100
        );
      }

      return (
        <div>
          <ul>
            <li>{rating.total} </li>
            <li>{rating.joy.num}</li>
            <li>{rating.sadness.num}</li>
            <li>{rating.anger.num}</li>
            <li>{rating.fear.num}</li>
            <li>{rating.disgust.num}</li>
          </ul>
          <div id="meter">
            <h3> Joy Meter: {percentage}% </h3>
            <HappyMeter className="meter" percent={percentage} />
          </div>
          <div>
            <TweetTable tweets={rating.joy.tweets} title={"Happy Tweets"} />
            <TweetTable tweets={rating.sadness.tweets} title={"Sad Tweets"} />
            <TweetTable tweets={rating.sadness.tweets} title={"Angry Tweets"} />
          </div>
        </div>
      );
    }}
  </Query>
);

function sorter(input) {
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
  console.log(rating);
  return rating;
}

export default Tweets;
