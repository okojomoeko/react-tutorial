import React from 'react';
import Board from './Board';
import calculateWinner from '../controller/calculateWinner'


export default function Game() {
  const [xIsNext, setIsNext] = React.useState(true);
  const [history, setHistory] = React.useState([{ squares: Array(9).fill(null) }]);

  function handleClick(i: number) {
    const _history = history;
    const current = _history[_history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...history, { squares: squares }]);
    setIsNext(!xIsNext);


  }


  const _history = history;
  const current = _history[_history.length - 1];
  const winner = calculateWinner(current.squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i: number) => { handleClick(i) }} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}
