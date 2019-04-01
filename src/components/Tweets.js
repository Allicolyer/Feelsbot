import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import HappyMeter from "./HappyMeter";
import { Accordion } from "react-light-accordion";
import TweetAccordion from "./TweetAccordion";

const GET_TWEETS = gql`
  query($lat: Float!, $lng: Float!, $m: Int!) {
    tweets(lat: $lat, lng: $lng, m: $m) {
      id_str
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
      if (error) return `Search for an address and Helen will assses the mood.`;

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
          (rating.joy.num /
            (rating.joy.num +
              rating.sadness.num +
              rating.fear.num +
              rating.disgust.num)) *
            100
        );
        // console.log(data);
      }

      return (
        <div id="tweet-wrapper">
          <div id="meter">
            <h3> Joy Meter: {percentage}% </h3>
            <HappyMeter className="meter" percent={percentage} />
            <br />
            <br />
          </div>
          <div>
            <Accordion atomic={true}>
              <TweetAccordion
                title={`${rating.joy.num} Happy Tweets`}
                rating={rating.joy}
              />
              <TweetAccordion
                title={`${rating.sadness.num} Sad Tweets`}
                rating={rating.sadness}
              />
              <TweetAccordion
                title={`${rating.anger.num} Angry Tweets`}
                rating={rating.anger}
              />
              <TweetAccordion
                title={`${rating.fear.num} Fearful Tweets`}
                rating={rating.fear}
              />
              <TweetAccordion
                title={`${rating.disgust.num} Disgusted Tweets`}
                rating={rating.disgust}
              />
            </Accordion>
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
    let filter = input.filter(a => a.emotion[key] > 0.65);
    rating[key] = {
      num: filter.length,
      tweets: filter
    };
  });
  console.log(rating);
  return rating;
}

export default Tweets;
