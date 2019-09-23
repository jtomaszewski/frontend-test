import { ApolloProvider } from '@apollo/react-hooks';
import React, { useState } from 'react';
import { client } from './apollo/client';
import './App.css';
import CountryInfo from './CountryInfo';
import { Select } from './ui/Select';

function App() {
  const [code, setCode] = useState('CA');
  const countryCodes = ['CA', 'PL', 'US', 'UK'];

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <CountryInfo code={code} />
        <Select
          value={code}
          options={countryCodes.map(code => ({ value: code }))}
          onChange={setCode}
        />
      </div>
    </ApolloProvider>
  );
}

export default App;
