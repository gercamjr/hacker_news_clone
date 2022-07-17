import express from 'express'
import {ApolloServer, gql} from 'apollo-server-express'

import {schema} from './schema'

const app = express()
const server = new ApolloServer({schema,})
server.applyMiddleware({app})

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
