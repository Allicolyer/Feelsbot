const { ApolloServer } = require("apollo-server");
const fetch = require("node-fetch");
const { importSchema } = require("graphql-import");
const typeDefs = importSchema("./src/schema.graphql");
const Query = require("./resolvers/Query");
const Tweet = require("./resolvers/Tweet");

const resolvers = {
  Query,
  Tweet
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
