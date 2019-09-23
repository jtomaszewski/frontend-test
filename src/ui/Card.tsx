import React from 'react';
import './Card.css';

export function Card(props: { children?: React.ReactNode }) {
  return <div className="Card">{props.children}</div>;
}
