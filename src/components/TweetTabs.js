import React from "react";
import styled from "styled-components";
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import TweetGrid from "./TweetGrid";
import "../styles/tabs.css";
import {
  mobile,
  Subtitle,
  tablet,
  ShowOnBigTablet,
  HideOnBigTablet,
  HideOnMobile
} from "./shared";

const StyledTabPanel = styled(TabPanel)`
  width: 100%;
`;

const Emoji = styled.span`
  font-size: 2em;
  @media ${mobile} {
    font-size: 1em;
  }
`;

const TabText = styled(Subtitle)`
  font-size: 1em;
  @media ${tablet} {
    font-size: 1em;
  }
`;

const emotions = ["joy", "sadness", "anger", "fear", "disgust"];

const emojis = {
  joy: "😄",
  sadness: "😭",
  anger: "😡",
  fear: "😱",
  disgust: "🤮"
};

const TweetTabs = ({ rating }) => {
  return (
    <Tabs>
      <TabList>
        {emotions.map(emotion => {
          return (
            <Tab key={emotion} tabFor={`tab-${emotion}`}>
              <TabText>
                <HideOnBigTablet>
                  {emotion.charAt(0).toUpperCase() + emotion.slice(1)}:{" "}
                  {rating[emotion].num}
                </HideOnBigTablet>
                <ShowOnBigTablet>
                  <HideOnMobile>
                    {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
                  </HideOnMobile>
                  {rating[emotion].num}
                </ShowOnBigTablet>
              </TabText>
              <Emoji role="img" aria-label={emotion}>
                {emojis[emotion]}
              </Emoji>
            </Tab>
          );
        })}
      </TabList>
      {emotions.map(emotion => {
        return (
          <StyledTabPanel key={emotion} tabId={`tab-${emotion}`}>
            <TweetGrid rating={rating[emotion]} />
          </StyledTabPanel>
        );
      })}
    </Tabs>
  );
};

export default TweetTabs;
