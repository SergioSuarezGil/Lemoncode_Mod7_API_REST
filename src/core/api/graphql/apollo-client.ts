
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_GRAPHQL_API_URL,
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
