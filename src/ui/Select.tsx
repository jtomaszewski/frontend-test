import React, { ChangeEvent } from 'react';

interface SelectProps {
  value?: string;
  options: { key?: string; label?: string; value: string }[];
  onChange?(value: string): void;
}

export function Select(props: SelectProps) {
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    if (props.onChange) {
      props.onChange(event.target.value);
    }
  };

  return (
    <select value={props.value} onChange={handleChange}>
      {props.options.map(option => (
        <option key={option.key || option.value} value={option.value}>
          {option.label || option.value}
        </option>
      ))}
    </select>
  );
}
