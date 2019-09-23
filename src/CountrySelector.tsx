import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Select } from './ui/Select';
import './CountrySelector.css';

export const GET_COUNTRIES_QUERY = gql`
  query Country {
    countries {
      emoji
      code
      name
    }
  }
`;

export interface GetCountriesQueryData {
  countries: Array<{
    emoji: string;
    code: string;
    name: string;
  }>;
}

interface CountrySelectorProps {
  value?: string;
  onChange?(value: string): void;
}

export function CountrySelector(props: CountrySelectorProps) {
  const { loading, error, data } = useQuery<GetCountriesQueryData>(
    GET_COUNTRIES_QUERY
  );

  if (loading) {
    return null;
  }

  if (error) {
    return null;
  }

  if (!data || !data.countries) {
    return null;
  }

  const options = data.countries.map(c => ({
    key: c.code,
    value: c.code,
    label: c.name
  }));

  return (
    <label className="CountrySelector">
      <div className="CountrySelector__label">Choose country:</div>
      <Select value={props.value} options={options} onChange={props.onChange} />
    </label>
  );
}
