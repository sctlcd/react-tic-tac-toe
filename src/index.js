import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// Square component
const Square = () => {
  return (
    <div className='square'>
      X
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
      <div className='board-row'>
        <Square /><Square /><Square />
      </div>
      <div className='board-row'>
        <Square /><Square /><Square />
      </div>
      <div className='board-row'>
        <Square /><Square /><Square />
      </div>
    </div>
  );
};


// Game component
const Game = () => {
  return (
    <div className='game'>
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
