import React from "react";
import Select from "react-select";
import { AUTOCOMPLETE } from "../utils/Queries";
import { Query } from "react-apollo";
import styled from "styled-components";
import { Span, Text } from "./shared";
import { theme } from "../styles/theme";

const SearchCard = styled.div`
  display: flex;
  text-align: left;
`;

const TwitterImage = styled.img`
  border-radius: ${p => p.theme.space[2]}px;
  margin: auto 0;
  padding: ${p => p.theme.space[2]}px;
`;

const UserName = styled.h3`
  color: ${p => p.theme.colors.primary};
  display: inline;
`;

const customStyles = {
  control: styles => ({
    ...styles,
    border: `1px solid ${theme.colors.primary}`,
    ":hover": {
      border: `1.5px solid ${theme.colors.primary}`
    }
  })
};

let options = [];

const Dropdown = ({ autocompleteText, handleChange, selectedOption }) => {
  return (
    <Query query={AUTOCOMPLETE} variables={{ text: autocompleteText }}>
      {({ loading, error, data }) => {
        // if (loading) return <Text>Loading...</Text>;
        if (error)
          return (
            <Text>
              FeelsBot has been overwhelmed with emotion. Please try again.
            </Text>
          );

        if (!loading) {
          if (data.autocomplete) {
            let users = data.autocomplete.map(user => ({
              value: user.screen_name,
              label: (
                <SearchCard>
                  <TwitterImage src={user.profile_image_url} />
                  <div>
                    <UserName>{user.name}</UserName> {""}
                    <Span>@{user.screen_name}</Span>
                    <Text>{user.description}</Text>
                  </div>
                </SearchCard>
              )
            }));
            options = users;
          }
        }
        return (
          <Select
            styles={customStyles}
            value={selectedOption}
            onChange={handleChange}
            options={options}
          />
        );
      }}
    </Query>
  );
};

export default Dropdown;
