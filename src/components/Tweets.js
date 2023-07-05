import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { GET_TWEETS, GET_TIMELINE } from "../utils/Queries";
import MoodMeter from "./MoodMeter";
import { Text, Title } from "./shared";
import { tweetSorter, percent, assignMood } from "../utils/helpers";
import happyBot from "../assets/happyBot.svg";
import neutralBot from "../assets/neutralBot.svg";
import sadBot from "../assets/sadBot.svg";
import loadingBot from "../assets/loadingBot.svg";
import TweetTabs from "./TweetTabs";

const Tweets = ({ map, lat, lng, m, timeline, screen_name, location }) => {
  let query;
  let variables;
  if (map) {
    query = GET_TWEETS;
    variables = { lat: lat, lng: lng, m: m };
  } else if (timeline) {
    query = GET_TIMELINE;
    variables = { screen_name: screen_name };
  }

  return (
    <Query query={query} variables={variables}>
      {({ loading, error, data }) => {
        if (error)
          return (
            <Text>
              Error: FeelsBot no longer has access to Twitter's API.
            </Text>
          );
        let tweets = [];
        let rating = {
          loading: true,
          total: 0,
          joy: { num: "-", tweets: [] },
          anger: { num: "-", tweets: [] },
          sadness: { num: "-", tweets: [] },
          fear: { num: "-", tweets: [] },
          disgust: { num: "-", tweets: [] }
        };
        let percentage = 0;
        if (!loading) {
          tweets = data.tweets;
          rating = tweetSorter(tweets);
          percentage = percent(rating);
        }

        return (
          <TweetWrapper
            rating={rating}
            percentage={percentage}
            map={map}
            timeline={timeline}
            screen_name={screen_name}
            location={location}
          />
        );
      }}
    </Query>
  );
};

const MeterDiv = styled.div`
  padding-bottom: ${p => p.theme.space[2]}px;
  margin: 0, auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Robot = styled.img`
  height: 150px;
  margin-top: ${p => p.theme.space[4]}px;
`;

const TweetWrapper = ({
  percentage,
  rating,
  map,
  timeline,
  screen_name,
  location
}) => {
  let mood = assignMood(percentage);
  const bots = {
    sad: sadBot,
    neutral: neutralBot,
    happy: happyBot
  };
  return (
    <div>
      <MeterDiv id="meter">
        {rating.loading ? (
          <div>
            <Robot src={loadingBot} />
            <Title> Joy Meter: {percentage}% </Title>
            <MoodMeter loading={true} percent={percentage} />
            <MeterExplanation loading />
          </div>
        ) : (
          <div>
            {!rating.total ? (
              <div>
                <Robot src={bots.neutral} />
                <Title> No Emotional Tweets</Title>
                <NoTweetText
                  map={map}
                  timeline={timeline}
                  screen_name={screen_name}
                  location={location}
                />
              </div>
            ) : (
              <div>
                <Robot src={bots[mood]} />
                <Title> Joy Meter: {percentage}% </Title>
                <MoodMeter loading={false} percent={percentage} mood={mood} />
                <MeterExplanation
                  percent={percentage}
                  map={map}
                  timeline={timeline}
                  screen_name={screen_name}
                  location={location}
                />
              </div>
            )}
          </div>
        )}
      </MeterDiv>
      <TweetTabs percent={percentage} rating={rating} />
    </div>
  );
};

export default Tweets;

const NoTweetText = ({
  screen_name = "null",
  location = "null",
  map,
  timeline
}) => (
  <div>
    {map && (
      <HelperText>{`Feelsbot couldn't find any emotional tweets near ${location}.
      This may be because there are too few tweets or because Feelsbot only understands English.
      Try searching for a different location.`}</HelperText>
    )}
    {timeline && (
      <HelperText>{`Feelsbot couldn't find any emotional tweets by @${screen_name}.
      This may be because there are too few tweets or because Feelsbot only understands English.
      Try searching for a different Twitter user.`}</HelperText>
    )}
  </div>
);

const MeterExplanation = ({
  percent = "0",
  screen_name = "null",
  location = "null",
  map,
  timeline,
  loading
}) => (
  <div>
    {map && (
      <HelperText>{`${percent}% of emotional tweets near ${location} tweets are joyful`}</HelperText>
    )}
    {timeline && (
      <HelperText>{`${percent}% of emotional tweets by @${screen_name} are joyful`}</HelperText>
    )}
    {loading && <HelperText>{`loading...`}</HelperText>}
  </div>
);

const HelperText = styled(Text)`
  margin-top: 0px;
  font-size: 0.75em;
  font-style: italic;
`;
