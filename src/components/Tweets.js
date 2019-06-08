import React from "react";
import styled from "styled-components";
import { Query } from "react-apollo";
import { GET_TWEETS, GET_TIMELINE } from "./Queries";
import MoodMeter from "./MoodMeter";
import { Flex } from "rebass";
import { Subtitle, Text } from "./shared";
import TweetGrid from "./TweetGrid";
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import { tweetSorter, percent } from "../utils/helpers";
import "react-web-tabs/dist/react-web-tabs.css";

const Tweets = ({ lat, lng, m }) => (
  <Query query={GET_TWEETS} variables={{ lat: lat, lng: lng, m: m }}>
    {({ loading, error, data }) => {
      // if (loading) return "Loading...";
      if (error)
        return (
          <Text>
            FeelsBot has been overwhelmed with emotion. Please try again.
          </Text>
        );

      let tweets = [];
      let rating = {
        total: "-",
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

      return <TweetWrapper rating={rating} percentage={percentage} map />;
    }}
  </Query>
);

const TweetTimeline = ({ screen_name }) => (
  <Query query={GET_TIMELINE} variables={{ screen_name: screen_name }}>
    {({ loading, error, data }) => {
      // if (loading) return "Loading...";
      if (error)
        return (
          <Text>
            FeelsBot has been overwhelmed with emotion. Please try again.
          </Text>
        );

      let tweets = [];
      let rating = {
        total: "-",
        joy: { num: "-", tweets: [] },
        anger: { num: "-", tweets: [] },
        sadness: { num: "-", tweets: [] },
        fear: { num: "-", tweets: [] },
        disgust: { num: "-", tweets: [] }
      };

      let percentage = 0;
      if (!loading) {
        tweets = data.user;
        rating = tweetSorter(tweets);
        percentage = percent(rating);
      }

      return <TweetWrapper rating={rating} percentage={percentage} timeline />;
    }}
  </Query>
);

const MapTweetWrapper = styled.div`
  padding: 10px;
  width: 80%;
`;

const StyledTabPanel = styled(TabPanel)`
  width: 100%;
`;

const TweetWrapper = ({ percentage, timeline, map, rating }) => {
  return (
    <div>
      {timeline && (
        <Flex flexDirection="column" justifyContent="center">
          <MeterInfo percentage={percentage} />
        </Flex>
      )}
      {map && (
        <MapTweetWrapper>
          <MeterInfo percentage={percentage} />
        </MapTweetWrapper>
      )}
      <div>
        <Tabs vertical className="vertical-tabs">
          <TabList>
            <Tab tabFor="tab-joy">Joy {rating.joy.num}</Tab>
            <Tab tabFor="tab-sadness">Sadness {rating.sadness.num}</Tab>
            <Tab tabFor="tab-anger">Anger {rating.anger.num}</Tab>
            <Tab tabFor="tab-fear">Fear {rating.fear.num}</Tab>
            <Tab tabFor="tab-disgust">Disgust {rating.disgust.num}</Tab>
          </TabList>

          <StyledTabPanel tabId="tab-joy">
            <TweetGrid rating={rating.joy} />
          </StyledTabPanel>
          <StyledTabPanel tabId="tab-sadness">
            <TweetGrid rating={rating.sadness} />
          </StyledTabPanel>
          <StyledTabPanel tabId="tab-anger">
            <TweetGrid rating={rating.anger} />
          </StyledTabPanel>
          <StyledTabPanel tabId="tab-fear">
            <TweetGrid rating={rating.fear} />
          </StyledTabPanel>
          <StyledTabPanel tabId="tab-disgust">
            <TweetGrid rating={rating.disgust} />
          </StyledTabPanel>
        </Tabs>
      </div>
    </div>
  );
};

const MeterDiv = styled.div`
  padding-bottom: ${p => p.theme.space[2]}px;
`;

const MeterInfo = ({ percentage }) => {
  return (
    <MeterDiv id="meter">
      <Subtitle> Joy Meter: {percentage}% </Subtitle>
      <MoodMeter className="meter" percent={percentage} />
    </MeterDiv>
  );
};

export { Tweets, TweetTimeline };
