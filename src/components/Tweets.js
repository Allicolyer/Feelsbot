import React from "react";
import { Query } from "react-apollo";
import { GET_TWEETS } from "./Queries";
import { GET_TIMELINE } from "./Queries";
import HappyMeter from "./HappyMeter";
// import { Accordion } from "react-light-accordion";
// import TweetAccordion from "./TweetAccordion";
import { Heading } from "rebass";
import TweetGrid from "./TweetGrid";
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";

const Tweets = props => (
  <Query
    query={GET_TWEETS}
    variables={{ lat: props.lat, lng: props.lng, m: props.m }}
  >
    {({ loading, error, data }) => {
      // if (loading) return "Loading...";
      if (error)
        return `Error - Arnold has been overwhelmed with emotion. Please try again.`;

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

      return (
        <TweetWrapper
          rating={rating}
          percentage={percentage}
          id={"tweet_wrapper"}
        />
      );
    }}
  </Query>
);

const TweetTimeline = props => (
  <Query query={GET_TIMELINE} variables={{ screen_name: props.screen_name }}>
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

      return (
        <TweetWrapper
          rating={rating}
          percentage={percentage}
          id={"timeline_wrapper"}
        />
      );
    }}
  </Query>
);

const TweetWrapper = props => {
  return (
    <div>
      <div id={props.id}>
        <div id="meter">
          <Heading as="h3"> Joy Meter: {props.percentage}% </Heading>
          <HappyMeter className="meter" percent={props.percentage} />
          <br />
          <br />
        </div>
      </div>
      <div>
        <Tabs defaultTab="tab-joy" vertical className="vertical-tabs">
          <TabList>
            <Tab tabFor="tab-joy">Joy {props.rating.joy.num}</Tab>
            <Tab tabFor="tab-sadness">Sadness {props.rating.sadness.num}</Tab>
            <Tab tabFor="tab-anger">Anger {props.rating.anger.num}</Tab>
            <Tab tabFor="tab-fear">Fear {props.rating.fear.num}</Tab>
            <Tab tabFor="tab-disgust">Disgust {props.rating.disgust.num}</Tab>
          </TabList>

          <TabPanel tabId="tab-joy">
            <TweetGrid rating={props.rating.joy} />
          </TabPanel>
          <TabPanel tabId="tab-sadness">
            <TweetGrid rating={props.rating.sadness} />
          </TabPanel>
          <TabPanel tabId="tab-anger">
            <TweetGrid rating={props.rating.anger} />
          </TabPanel>
          <TabPanel tabId="tab-fear">
            <TweetGrid rating={props.rating.fear} />
          </TabPanel>
          <TabPanel tabId="tab-disgust">
            <TweetGrid rating={props.rating.disgust} />
          </TabPanel>
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
