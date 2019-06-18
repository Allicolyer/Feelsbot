import { AUTOCOMPLETE } from "./Queries";
import { client } from "../index";

export const autocomplete = async text => {
  const res = await client.query({
    query: AUTOCOMPLETE,
    variables: { text: `${text}` }
  });
  return res;
};
