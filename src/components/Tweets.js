import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import HappyMeter from "./HappyMeter";

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
      let percentage = (rating.joy / (rating.joy + rating.sadness)) * 100;

      return (
        <div>
          <table>
            <thead>
              <tr>
                {/* {/* <th>Name</th>
                <th>Location</th> */}
                <th>Total Tweets</th>
                <th> Joy</th>
                <th> Sadness</th>
                <th> Anger</th>
                <th> Fear</th>
                <th> Disgust</th>
              </tr>
            </thead>
            <tbody>
              {/* {data.tweets.map(tweet => (
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
              ))} */}
              <tr>
                {/* <td />
                <td /> */}
                <td>{rating.total} </td>
                <td>{rating.joy}</td>
                <td>{rating.sadness}</td>
                <td>{rating.anger}</td>
                <td>{rating.fear}</td>
                <td>{rating.disgust}</td>
              </tr>
            </tbody>
          </table>
          <div id="meter">
            <h3> Joy Meter: {Math.floor(percentage)}% </h3>
            <HappyMeter className="meter" percent={percentage} />
          </div>
        </div>
      );
    }}
  </Query>
);

function averages(input) {
  let rating = {};
  let keys = Object.keys(input[0]);
  //removes any entries that are 0 and records how many there are
  rating.total = input.filter(a => a.joy).length;
  console.log(rating);

  // let percentage =
  //   (rating.joy / (rating.joy + rating.sadness + rating.anger)) * 100;
  // console.log(percentage);
  // for each emotion find the total number of tweets that are above 50% and add it to the rating object
  keys.forEach(key => {
    let num = input.filter(a => a[key] > 0.5).length;
    rating[key] = num;
  });

  return rating;
}

export default Tweets;

//better ways to do the rating -- filter it down to tweets that are .5 happy or higher -- count these as happy tweets
// filter it down to tweets that are .5 sadness or higher -- count these as sad tweets
//filter it down to tweets that are .5 anger or higher -- count these as angry tweets
