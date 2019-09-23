import React, { ChangeEvent } from 'react';

interface CountrySelectorProps {
  value?: string;
  options: string[];
  onChange?(value: string): void;
}

export function CountrySelector(props: CountrySelectorProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };

  return (
    <select value={props.value} onChange={handleChange}>
      {props.options.map(option => (
        <option value={option}>{option}</option>
      ))}
    </select>
  );
}
