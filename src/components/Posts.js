import React from "react";
import gql from "graphql-tag";
import Emotion from "./Emotion";
import { Query } from "react-apollo";

const Posts = props => (
  <Query
    query={gql`
      {
        posts(lat: ${props.lat}, lng: ${props.lng}, m: ${props.m}) {
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
              <th>Joy, Sadness</th>
            </tr>
          </thead>
          <tbody>
            {data.posts.map(post => (
              <tr>
                <td>{post.user.name}</td>
                <td>{post.user.location}</td>
                <td>{post.text}</td>
                <td>
                  <Emotion
                    text={`"${post.text.replace(/(\r\n|\n|\r)/gm, " ")}"`}
                  />
                  {console.log(post.text)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }}
  </Query>
);

export default Posts;
