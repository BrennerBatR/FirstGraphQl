const { GraphQLServer } = require('graphql-yoga');
const path = require('path');
const resolvers = require('./Resolvers/resolvers');


const server = new GraphQLServer({
  typeDefs: path.resolve(__dirname, './Schema/schema.graphql'),
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))