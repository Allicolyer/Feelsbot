import React from "react";
import styled from "styled-components";
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import TweetGrid from "./TweetGrid";
import "../styles/tabs.css";

const StyledTabPanel = styled(TabPanel)`
  width: 100%;
`;

const emotions = ["joy", "sadness", "anger", "fear", "disgust"];

const TweetTabs = ({ rating }) => {
  return (
    <Tabs vertical className="vertical-tabs">
      <TabList>
        {emotions.map(emotion => {
          return (
            <Tab tabFor={`tab-${emotion}`}>
              {emotion.charAt(0).toUpperCase() + emotion.slice(1)}{" "}
              {rating[emotion].num}
            </Tab>
          );
        })}
      </TabList>
      {emotions.map(emotion => {
        return (
          <StyledTabPanel tabId={`tab-${emotion}`}>
            <TweetGrid rating={rating[emotion]} />
          </StyledTabPanel>
        );
      })}
    </Tabs>
  );
};

export default TweetTabs;
