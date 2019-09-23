import { ApolloProvider } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { client } from './apollo/client';
import './App.css';
import CountryInfo from './CountryInfo';
import { CountrySelector } from './CountrySelector';

function App() {
  const [code, setCode] = useState('CA');

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <CountryInfo code={code} />
        <CountrySelector value={code} onChange={setCode} />
      </div>
    </ApolloProvider>
  );
}

export default App;
