import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const Emotion = props => (
  <Query
    query={gql`
      {
        emotion(text: ${props.text}){
          joy
          sadness
      }
    }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      return (
        <div>
          {data.emotion.map(post => (
            <div>
              {post.joy},{post.sadness}
            </div>
          ))}
        </div>
      );
    }}
  </Query>
);

export default Emotion;
