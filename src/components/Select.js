import React, { useState, useRef } from "react";
import { Async } from "react-select";
import { autocomplete } from "../utils/query-calls";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { Span, Subtitle, mobile, Footer } from "./shared";
import Tweets from "./Tweets";

export default function Select(props) {
  const myRef = useRef(null);
  const [screen_name, updateScreenName] = useState("");
  const [render, toggleRender] = useState(false);
  const [text, updateAutocompleteText] = useState("");

  const handleChange = (selectedOption) => {
    if (selectedOption) {
      updateScreenName(selectedOption.value);
      toggleRender(true);
      setTimeout(() => {
        window.scrollTo(0, myRef.current.offsetTop);
      }, 500);
    }
  };

  const customStyles = {
    input: () => ({
      fontSize: "1.25em",
      height: "2em",
      padding: "1em 0 0 0",
      color: `${theme.colors.primary}`,
    }),
    control: (styles) => ({
      ...styles,
      border: `1px solid ${theme.colors.primary}`,
      ":hover": {
        border: `1.5px solid ${theme.colors.primary}`,
      },
    }),
  };

  return (
    <div>
      <SelectContainer>
        <Async
          styles={customStyles}
          loadOptions={loadOptions}
          onInputChange={(text) => updateAutocompleteText(text)}
          onChange={handleChange}
          isClearable
        />
      </SelectContainer>
      {render && <Footer timeline />}
      <div ref={myRef}>
        {render && <Tweets screen_name={screen_name} timeline />}
      </div>
    </div>
  );
}

const loadOptions = async (autocompleteText) => {
  let users = await autocomplete(autocompleteText).then((value) => {
    if (value.data.autocomplete) {
      return value.data.autocomplete.map((user) => ({
        value: user.screen_name,
        label: (
          <SearchCard>
            <TwitterImage src={user.profile_image_url} />
            <div>
              <UserName>{user.name}</UserName> <br />
              <Span>@{user.screen_name}</Span>
            </div>
          </SearchCard>
        ),
      }));
    } else return;
  });
  return users;
};

const SearchCard = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
`;

const TwitterImage = styled.img`
  height: 2.5em;
  margin: auto 0;
  padding: 0 ${(p) => p.theme.space[2] * 1.5}px 0 ${(p) => p.theme.space[2]}px;
`;

const UserName = styled(Subtitle)`
  display: inline;
`;

const SelectContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  @media ${mobile} {
    width: 80%;
  }
`;
