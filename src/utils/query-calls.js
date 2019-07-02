import { AUTOCOMPLETE } from "./Queries";
import { client } from "../index";

export const autocomplete = async text => {
  const res = await client.query({
    query: AUTOCOMPLETE,
    variables: { text: `${text}` }
  });
  return res;
};

export const wakeUp = async () => {
  const res = await client.query({
    query: AUTOCOMPLETE,
    variables: { text: "a" }
  });
  return res;
}