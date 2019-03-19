const { ApolloServer } = require("apollo-server");
const fetch = require("node-fetch");
const { importSchema } = require("graphql-import");
const typeDefs = importSchema("./src/schema.graphql");

const twitterURL = ``;
const imbUrl = ``;

const resolvers = {
  Query: {
    tweets: (parent, args) => {
      const { lat, lng, m } = args;
      return fetch(`${twitterURL}&geocode=${lat},${lng},${m}mi`)
        .then(res => res.json())
        .then(r => r.statuses);
    },
    emotion: (parent, args) => {
      const { text } = args;
      return fetch(`${imbUrl}`, {
        body: `{"text":"${text}","features":{"emotion":{}}}`,
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      })
        .then(res => res.json())
        .then(r => [r.emotion.document.emotion]);
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
