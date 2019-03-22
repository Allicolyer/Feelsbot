const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");
const typeDefs = importSchema("./src/schema.graphql");
const Query = require("./resolvers/Query");
const Tweet = require("./resolvers/Tweet");
const City = require("./resolvers/City");

const resolvers = {
  Query,
  Tweet,
  City
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
