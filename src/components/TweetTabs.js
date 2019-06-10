import React from "react";
import styled from "styled-components";
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import TweetGrid from "./TweetGrid";
import "react-web-tabs/dist/react-web-tabs.css";

const StyledTabPanel = styled(TabPanel)`
  width: 100%;
`;
const TweetTabs = ({ rating }) => {
  return (
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
  );
};

export default TweetTabs;
