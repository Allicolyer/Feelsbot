import React from "react";
import { Title, Text, Link } from "./shared";

const About = () => (
  <div>
    <Title> How does AI understand our emotions?</Title>
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
