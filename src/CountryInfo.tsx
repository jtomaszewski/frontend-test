import React from 'react';

interface CountryInfoProps {
  code: string;
}

export default function CountryInfo(props: CountryInfoProps) {
  return <React.Fragment>{JSON.stringify(props)}</React.Fragment>;
}
