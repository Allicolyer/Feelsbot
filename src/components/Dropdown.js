import React from "react";
import Select from "react-select";
import { AUTOCOMPLETE } from "./Queries";
import { Query } from "react-apollo";
import { Box, Image, Text, Heading } from "rebass";

let options = [];

const Dropdown = props => {
  return (
    <Query query={AUTOCOMPLETE} variables={{ text: props.autocompleteText }}>
      {({ loading, error, data }) => {
        // if (loading) return "Loading...";
        if (error)
          return `Error - Arnold has been overwhelmed with emotion. Please try again.`;

        if (!loading) {
          if (data.autocomplete) {
            let users = data.autocomplete.map(user => ({
              value: user.screen_name,
              label: (
                <div className="searchCard">
                  <Image src={user.profile_image_url} borderRadius={2} />
                  <Box px={2}>
                    <Heading as="h3">{user.name}</Heading>
                    <Text fontSize={0}>@{user.screen_name}</Text>
                    <Text fontSize={1}>{user.description}</Text>
                  </Box>
                </div>
              )
            }));
            options = users;
          }
        }
        return (
          <Select
            value={props.selectedOption}
            onChange={props.handleChange}
            options={options}
          />
        );
      }}
    </Query>
  );
};
export default Dropdown;
