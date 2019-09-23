import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { CountryInfoCard } from './ui/CountryInfoCard';

export const GET_COUNTRY_QUERY = gql`
  # Write your query or mutation here
  query Country($code: String!) {
    country(code: $code) {
      emoji
      name
      currency
      languages {
        name
      }
      phone
    }
  }
`;

export interface GetCountryQueryData {
  country: {
    emoji: string;
    name: string;
    currency: string;
    languages: { name: string }[];
    phone: string;
  };
}

interface CountryInfoProps {
  code: string;
}

export default function CountryInfo(props: CountryInfoProps) {
  const { loading, error, data } = useQuery<GetCountryQueryData>(
    GET_COUNTRY_QUERY,
    {
      variables: { code: props.code }
    }
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Loading failed. Please refresh the browser.</p>;
  }

  if (!data) {
    return null;
  }

  return (
    <CountryInfoCard
      {...{
        ...data.country,
        languages: data.country.languages.map(l => l.name),
        phoneCode: data.country.phone
      }}
    />
  );
}
