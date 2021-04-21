import React from 'react';
import Board from '../board/index';
import './style.css';

export default function Game() {
  // Render Game component
  return (
    <div className="game">
      Tic-Tac-Toe
      <Board />
    </div>
  );
};
