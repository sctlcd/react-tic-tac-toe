import React from 'react';
import Board from '../board/index';
import './style.css';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    };
  }

  // https://www.debuggr.io/react-setstate-is-not-a-function/
  // https://reactjs.org/tutorial/tutorial.html#why-immutability-is-important
  // handleClick function
  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];

    // 1. Make a copy of squares state array
    const newSquares = current.squares.slice();
    const winnerDeclared = Boolean(calculateWinner(newSquares));
    const squaredFilled = Boolean(newSquares[i]);
    // Returning early - if a player has already won or the square is already
    // filled
    if (winnerDeclared || squaredFilled) {
      return;
    }

    // 2. Mutate the copy, setting the i-th element to 'X'
    newSquares[i] = this.state.xIsNext ? 'X' : 'O';

    // 3. Request changes to the Board state with the mutated copy and tells
    // React that this component and its children need to be re-rendered with
    // the updated state
    this.setState({
      history: history.concat([
        {
          squares: newSquares
        }
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  // Render Game component
  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
      'Go to move #' + move :
      'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status = winner ?
      `Winner: ${winner}` :
      `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;

    return (
      <div className="game">
        <div className="game-board">
          <h1 className="title">Tic-Tac-Toe</h1>
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// Calculate winner function
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // colums
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  for (let line of lines) {
    const [a, b, c] = line;

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // 'X' or 'O'
    }
  }

  return null;
}

export default Game;
