import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import { client } from './apollo/client';
import './App.css';
import CountryInfo from './CountryInfo';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <CountryInfo code="CA" />
      </div>
    </ApolloProvider>
  );
}

export default App;
