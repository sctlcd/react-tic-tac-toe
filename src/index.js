import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// Square component
const Square = () => {
  return (
    <div style={{
      backgroundColor: "DimGrey",
      margin: 10,
      padding: 20,
    }}>
      Square
    </div>
  );
};


// Board component
const Board = () => {
  return (
    <div style={{
      backgroundColor: "grey",
      margin: 10,
      padding: 20,
    }}>
      Board
      <Square />
    </div>
  );
};


// Game component
const Game = () => {
  return (
    <div style={{
      backgroundColor: "DarkGrey",
      margin: 10,
      padding: 20,
    }}>
      Game
      <Board />
    </div>
  );
};

// Game component render
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
