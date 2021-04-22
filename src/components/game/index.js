import React from 'react';
import Board from '../board/index';
import './style.css';

export default function Game() {
  // Render Game component
  return (
    <div className="game">
      <h1 className="title">Tic-Tac-Toe</h1>
      <Board />
    </div>
  );
};
