import { ApolloProvider } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { client } from './apollo/client';
import './App.css';
import CountryInfo from './CountryInfo';
import { CountrySelector } from './ui/CountrySelector';

function App() {
  const [code, setCode] = useState('CA');
  const countries = ['CA', 'PL', 'US', 'UK'];

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <CountryInfo code={code} />
        <CountrySelector value={code} options={countries} onChange={setCode} />
      </div>
    </ApolloProvider>
  );
}

export default App;
