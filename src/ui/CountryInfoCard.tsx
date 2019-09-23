import React from 'react';
import { Card } from './Card';

interface CountryInfoCardProps {
  emoji: string;
  name: string;
  currency: string;
  languages: string[];
  phoneCode: string;
}

export function CountryInfoCard(props: CountryInfoCardProps) {
  return (
    <Card>
      {/* TODO styling */}
      <h2>
        {props.emoji} {props.name}
      </h2>
      <ul>
        <li>
          Currency: <strong>{props.currency}</strong>
        </li>
        <li>
          Languages: <strong>{props.languages.join(', ')}</strong>
        </li>
        <li>
          Phone code: <strong>{props.phoneCode}</strong>
        </li>
      </ul>
    </Card>
  );
}
