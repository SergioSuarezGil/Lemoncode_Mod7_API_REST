
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { ApolloProvider } from '@apollo/client/react';
import { apolloClient } from './core/api/graphql/apollo-client';

const container = document.getElementById('root');
if (!container) throw new Error('No se encontró el elemento root');
const root = createRoot(container);

root.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);
