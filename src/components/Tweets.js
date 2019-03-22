import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const Tweets = props => (
  <Query
    query={gql`
      {
        tweets(lat: ${props.lat}, lng: ${props.lng}, m: ${props.m}) {
          text
          created_at
          user {
            name
            location
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
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      let emotions = [];
      data.tweets.map(tweet => emotions.push(tweet.emotion));
      let rating = averages(emotions);

      return (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Text</th>
              <th>Joy</th>
              <th>Sadness</th>
              <th>Anger</th>
              <th>Fear</th>
              <th>Disgust</th>
            </tr>
          </thead>
          <tbody>
            {data.tweets.map(tweet => (
              <tr>
                <td>{tweet.user.name}</td>
                <td>{tweet.user.location}</td>
                <td>{tweet.text}</td>
                <td>{tweet.emotion.joy}</td>
                <td>{tweet.emotion.sadness}</td>
                <td>{tweet.emotion.anger}</td>
                <td>{tweet.emotion.fear}</td>
                <td>{tweet.emotion.disgust}</td>
              </tr>
            ))}
            <tr>
              <td />
              <td />
              <td> Averages: </td>
              <td>{rating.joy}</td>
              <td>{rating.sadness}</td>
              <td>{rating.anger}</td>
              <td>{rating.fear}</td>
              <td>{rating.disgust}</td>
            </tr>
          </tbody>
        </table>
      );
    }}
  </Query>
);

function averages(input) {
  let rating = {};
  let keys = Object.keys(input[0]);
  //removes any entries that are 0
  let emotions = input.filter(a => a.joy);
  //for each emotion find the average and add it to the rating object
  keys.forEach(key => {
    let average =
      emotions.map(emotion => emotion[key]).reduce((a, b) => a + b) /
      emotions.length;
    rating[key] = average;
  });
  return rating;
}

export default Tweets;
