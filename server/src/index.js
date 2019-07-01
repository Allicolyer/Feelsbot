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
  City
};

const server = new ApolloServer({
  typeDefs,
  resolvers
  // cors: {
  //   origin: "https://nervous-davinci-bad38b.netlify.com"
  // }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
