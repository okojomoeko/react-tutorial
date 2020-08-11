import React from 'react';
import Board from './Board';
import calculateWinner from '../controller/calculateWinner'


export default function Game() {
  const [xIsNext, setIsNext] = React.useState(true);
  const [history, setHistory] = React.useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = React.useState(0);

  function handleClick(i: number) {
    const _history = history.slice(0, stepNumber + 1);
    const current = _history[_history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([..._history, { squares: squares }]);
    setIsNext(!xIsNext);
    setStepNumber(_history.length)


  }

  function jumpTo(step: number) {
    setStepNumber(step);
    setIsNext((step % 2) === 0)
  }


  const _history = history;
  const current = _history[stepNumber];
  const winner = calculateWinner(current.squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const moves = _history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });
  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i: number) => { handleClick(i) }} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}
