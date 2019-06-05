import React from "react";
import { Query } from "react-apollo";
import { GET_TWEETS } from "./Queries";
import { GET_TIMELINE } from "./Queries";
import MoodMeter from "./MoodMeter";
// import { Accordion } from "react-light-accordion";
// import TweetAccordion from "./TweetAccordion";
import styled from "styled-components";
import { Heading, Flex } from "rebass";
import TweetGrid from "./TweetGrid";
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";

const Tweets = ({ lat, lng, m }) => (
  <Query query={GET_TWEETS} variables={{ lat: lat, lng: lng, m: m }}>
    {({ loading, error, data }) => {
      // if (loading) return "Loading...";
      if (error)
        return `Error - FeelsBot has been overwhelmed with emotion. Please try again.`;

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
        rating = sorter(tweets);
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
      if (error) return `Hold on a sec`;

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
        rating = sorter(tweets);
        percentage = percent(rating);
      }

      return <TweetWrapper rating={rating} percentage={percentage} timeline />;
    }}
  </Query>
);

const MeterInfo = ({ percentage }) => {
  return (
    <div id="meter">
      <Heading as="h3"> Joy Meter: {percentage}% </Heading>
      <MoodMeter className="meter" percent={percentage} />
      <br />
      <br />
    </div>
  );
};

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
        <Tabs defaultTab="none" vertical className="vertical-tabs">
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

function sorter(input) {
  let rating = {};
  let keys = ["joy", "sadness", "fear", "anger", "disgust"];
  //removes any entries that are 0 and records how many there are
  rating.total = input.filter(a => a.emotion.joy).length;

  //creates a new array that sorts each tweet by it's category
  keys.forEach(key => {
    let filter = input.filter(a => a.emotion[key] > 0.6);
    rating[key] = {
      num: filter.length,
      tweets: filter
    };
  });
  console.log(rating);
  return rating;
}

function percent(input) {
  let percentage = 0;
  percentage = Math.floor(
    (input.joy.num /
      (input.joy.num +
        input.anger.num +
        input.sadness.num +
        input.fear.num +
        input.disgust.num)) *
      100
  );
  return percentage;
}

export { Tweets, TweetTimeline };
