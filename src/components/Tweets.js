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
          </tbody>
        </table>
      );
    }}
  </Query>
);

export default Tweets;
