import gql from "graphql-tag";

const GET_TWEETS = gql`
  query($lat: Float!, $lng: Float!, $m: Int!) {
    tweets: tweets(lat: $lat, lng: $lng, m: $m) {
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

const GET_TIMELINE = gql`
  query($screen_name: String!) {
    tweets: user(screen_name: $screen_name) {
      id_str
      text
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

const AUTOCOMPLETE = gql`
  query($text: String!) {
    autocomplete(text: $text) {
      name
      screen_name
      profile_image_url
      description
    }
  }
`;

export { GET_TWEETS, GET_TIMELINE, AUTOCOMPLETE };
