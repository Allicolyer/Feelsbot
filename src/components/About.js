import React from "react";
import { Title, Subtitle, Text, Link } from "./shared";

const About = () => (
  <div className="App">
    <Title>About</Title>
    <Subtitle>
      {" "}
      How does AI understand our emotions? What about our emotions in tweets?
    </Subtitle>
    <Text>
      This project uses IBM's natural langauge understanding to understand the
      emotions that are in tweets. Here's a{" "}
      <Link href="https://natural-language-understanding-demo.ng.bluemix.net/">
        demo.
      </Link>
    </Text>
  </div>
);

export default About;
