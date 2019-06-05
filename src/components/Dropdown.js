import React from "react";
import Select from "react-select";
import { AUTOCOMPLETE } from "./Queries";
import { Query } from "react-apollo";
import { Box, Image, Text, Heading, Flex } from "rebass";
import styled from "styled-components";

const SearchCard = styled(Flex)`
  text-align: left;
`;

let options = [];

const Dropdown = ({ autocompleteText, handleChange, selectedOption }) => {
  return (
    <Query query={AUTOCOMPLETE} variables={{ text: autocompleteText }}>
      {({ loading, error, data }) => {
        // if (loading) return "Loading...";
        if (error)
          return `Error - FeelsBot has been overwhelmed with emotion. Please try again.`;

        if (!loading) {
          if (data.autocomplete) {
            let users = data.autocomplete.map(user => ({
              value: user.screen_name,
              label: (
                <SearchCard>
                  <Image src={user.profile_image_url} borderRadius={2} />
                  <Box px={2}>
                    <Heading as="h3">{user.name}</Heading>
                    <Text fontSize={0}>@{user.screen_name}</Text>
                    <Text fontSize={1}>{user.description}</Text>
                  </Box>
                </SearchCard>
              )
            }));
            options = users;
          }
        }
        return (
          <Select
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
