import React, { Component } from "react";
import { Async } from "react-select";
import { autocomplete } from "../utils/query-calls";
import styled from "styled-components";
import { theme } from "../styles/theme";
import { Span, Subtitle } from "./shared";

export default class Select extends Component {
  state = { autocompleteText: "" };
  handleInputChange = autocompleteText => {
    this.setState({ autocompleteText });
    console.log(this.state.autocompleteText);
  };

  customStyles = {
    input: () => ({
      fontSize: "1.25em",
      color: `${theme.colors.primary}`
    }),
    control: styles => ({
      ...styles,
      border: `1px solid ${theme.colors.primary}`,
      ":hover": {
        border: `1.5px solid ${theme.colors.primary}`
      }
    })
  };

  render() {
    return (
      <div>
        <Async
          styles={this.customStyles}
          loadOptions={loadOptions}
          onInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}

const loadOptions = async autocompleteText => {
  let users = await autocomplete(autocompleteText).then(value => {
    if (value.data.autocomplete) {
      return value.data.autocomplete.map(user => ({
        value: user.screen_name,
        label: (
          <SearchCard>
            <TwitterImage src={user.profile_image_url} />
            <div>
              <UserName>{user.name}</UserName> {""}
              <Span>@{user.screen_name}</Span>
            </div>
          </SearchCard>
        )
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
  height: 1.75em;
  margin: auto 0;
  padding: ${p => p.theme.space[1]}px;
`;

const UserName = styled(Subtitle)`
  display: inline;
`;
