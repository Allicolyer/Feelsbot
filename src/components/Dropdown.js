import React from "react";
import Select from "react-select";
import { AUTOCOMPLETE } from "./Queries";
import { Query } from "react-apollo";

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
              label: `${user.name}: ${user.screen_name}`
            }));
            options = users;
          }
        }
        // const { selectedOption } = props.selectedOption;
        return (
          <Select
            // value={selectedOption}
            onChange={props.handleChange}
            options={options}
          />
        );
      }}
    </Query>
  );
};
export default Dropdown;
