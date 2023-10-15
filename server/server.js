import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs, resolvers } from './app.js';

const server = new ApolloServer({
    typeDefs,resolvers
})

const {url} = await startStandaloneServer(server, {
    listen: {port: 4000},
})

console.log(`Backend server started at ${url}`)
