import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// Square component
const Square = (props) => {
  return (
    <button
      className="square"
      onClick={props.onClickEvent}
    >
      {props.value}
    </button>
  );
};

// Board component
const Board = () => {
  const initialSquares = Array(9).fill(null);
  const [squares, setSquares] = useState(initialSquares);
  const [xIsNext, setXIsNext] = useState(true);

  // handledClickEvent function
  const handledClickEvent = (i) => {
    // 1. Make a copy of squares state array
    const newSquares = [...squares];
    // 2. Mutate the copy, setting the i-th element to 'X'
    newSquares[i] = xIsNext ? 'X' : 'O';
    // 3. Call the setSquares functions with the mutated copy
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  // Render Square component
  const renderSquare = (i) => {
    return (
      <Square value={squares[i]}
      onClickEvent={() => handledClickEvent(i)}
      />
    );
  };

  const winner = calculateWinner(squares);
  const status = winner ?
    `Winner: ${winner}` :
    `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    // <div style={{
    //   backgroundColor: "grey",
    //   margin: 10,
    //   padding: 20,
    // }}>
    <div>
      <div className="status">{status}</div>
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
      Tic-Tac-Toe
      <Board />
    </div>
  );
};

// Game component render
ReactDOM.render(
  <Game />,
  document.getElementById("root")
);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // colums
    [0, 4, 8], [2, 4, 6], // diagonals
  ];

  for (let line of lines) {
    const [a, b, c] = line;

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // 'X' or 'O'
    }
  }

  return null;
}
