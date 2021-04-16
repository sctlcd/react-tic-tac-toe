import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// Square component
const Square = (props) => {
  return (
    <button
      className="square"
      onClick={() => alert(`square ${props.value} clicked`)}
    >
      {props.value}
    </button>
  );
};


// Board component
const Board = () => {
  // Render Square component
  const renderSquare = (i) => {
    return (
      <Square value={i}/>
    );
  };

  return (
    <div style={{
      backgroundColor: "grey",
      margin: 10,
      padding: 20,
    }}>
      Board
      <div className="board-row">
        {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
      </div>
    </div>
  );
};


// Game component
const Game = () => {
  return (
    <div className="game">
      Game
      <Board />
    </div>
  );
};

// Game component render
ReactDOM.render(
  <Game />,
  document.getElementById("root")
);
