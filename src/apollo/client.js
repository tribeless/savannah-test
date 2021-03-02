import {GraphQLClient} from "graphql-request";

const token = process.env.REACT_APP_AUTH_TOKEN;
const client = new GraphQLClient('https://api.github.com/graphql', { headers: {
authorization: token ? `Bearer ${token}` : ""
} });

export default client;