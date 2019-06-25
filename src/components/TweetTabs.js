import React from "react";
import styled from "styled-components";
import { Tab, TabPanel, Tabs, TabList } from "react-web-tabs";
import TweetGrid from "./TweetGrid";
import MobileGrid from "./MobileGrid";
import "../styles/tabs.css";
import {
  mobile,
  Subtitle,
  tablet,
  ShowOnBigTablet,
  HideOnBigTablet,
  HideOnMobile,
  isMobile
} from "./shared";

const changeWidth = tabId => {
  let div = document.getElementById(tabId);
  div.style.width === "99.5%"
    ? (div.style.width = "100%")
    : (div.style.width = "99.5%");
};

const TweetTabs = ({ rating }) => {
  return (
    <Tabs
      defaultTab="tab-joy"
      onChange={tabId => {
        changeWidth(tabId);
      }}
    >
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
          <StyledTabPanel
            id={`tab-${emotion}`}
            key={emotion}
            tabId={`tab-${emotion}`}
          >
            {!isMobile() && (
              <TweetGrid
                description={titles[emotion]}
                rating={rating[emotion]}
              />
            )}
            {isMobile() && (
              <MobileGrid
                description={titles[emotion]}
                rating={rating[emotion]}
              />
            )}
          </StyledTabPanel>
        );
      })}
    </Tabs>
  );
};

const StyledTabPanel = styled(TabPanel)`
  width: 100%;
  height: 100vh;
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

const titles = {
  joy: "Joyful Tweets",
  sadness: "Sad Tweets",
  anger: "Angry Tweets",
  fear: "Fearful Tweets",
  disgust: "Disgusted Tweets"
};

export default TweetTabs;
