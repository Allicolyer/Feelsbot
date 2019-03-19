import React from "react";
import gql from "graphql-tag";
import Emotion from "./Emotion";
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
              <th>Emotions</th>
            </tr>
          </thead>
          <tbody>
            {data.tweets.map(tweet => (
              <tr>
                <td>{tweet.user.name}</td>
                <td>{tweet.user.location}</td>
                <td>{tweet.text}</td>
                {console.groupCollapsed()}
                {console.log("before", tweet.text)}
                {console.log(
                  "after",
                  tweet.text
                    .replace(/(\r\n|\n|\r)/gm, " ")
                    .replace(/['"]+/g, "")
                )}
                {console.groupEnd()}
                <td>
                  <Emotion
                    text={`"${tweet.text
                      .replace(/(\r\n|\n|\r)/gm, " ")
                      .replace(/['"]+/g, "")}"`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }}
  </Query>
);

export default Tweets;
