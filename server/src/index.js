//configure dotenv
require("dotenv").config();

const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");
const typeDefs = importSchema("./src/schema.graphql");
const Query = require("./resolvers/Query");
const Tweet = require("./resolvers/Tweet");
const Emotion = require("./resolvers/Emotion");
const City = require("./resolvers/City");

const resolvers = {
  Query,
  Tweet,
  Emotion,
  City,
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
