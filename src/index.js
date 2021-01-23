const { ApolloServer } = require('apollo-server');
const typeDefs = require('./typedef');
const resolvers = require('./resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server
  .listen()
  .then(({ url }) =>
    console.log(`Server is running on ${url}`)
  );