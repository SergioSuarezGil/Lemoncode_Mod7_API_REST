import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createHttpLink } from '@apollo/client/link/http';

const httpLink = createHttpLink({
  uri: 'https://rickandmortyapi.com/graphql',
});

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});
