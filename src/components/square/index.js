import React from 'react';
import './style.css'

export default function Square(props) {
  // Render Square component
  return (
    <button
      className="square"
      onClick={props.onClickEvent}
    >
      {props.value}
    </button>
  )
};
