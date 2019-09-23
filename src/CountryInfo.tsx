import React from 'react';
import { CountryInfoCard } from './ui/CountryInfoCard';

interface CountryInfoProps {
  code: string;
}

export default function CountryInfo(props: CountryInfoProps) {
  const data = {
    emoji: '🇨🇦',
    name: 'Canada',
    currency: 'CAD',
    languages: [
      {
        name: 'English'
      },
      {
        name: 'French'
      }
    ],
    phone: '1'
  };

  return (
    <CountryInfoCard
      {...{
        ...data,
        languages: data.languages.map(l => l.name),
        phoneCode: data.phone
      }}
    />
  );
}
