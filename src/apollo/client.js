import {ApolloClient,InMemoryCache,createHttpLink} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';


const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token 
  const token = process.env.REACT_APP_AUTH_TOKEN;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const client = new ApolloClient({
    link:authLink.concat(httpLink),
    cache:new InMemoryCache(),
    resolvers:{},
    connectToDevTools:true
});

export default client;