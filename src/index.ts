// src/index.ts
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import config from "./config";

// Define the GraphQL schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// Root resolver for the API
const root = {
  hello: () => "Hello, GraphQL!",
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Enable GraphiQL interface for testing in the browser
  })
);

const port = config.port;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/graphql`);
});
