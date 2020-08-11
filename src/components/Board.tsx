import React from 'react'
import Square from './Square';
import calculateWinner from '../controller/calculateWinner'

export default function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));
  const [xIsNext, setIsNext] = React.useState(true);

  function renderSquare(i: number) {
    return <Square value={squares[i]} onClick={() => handleClick(i)}></Square>
  }

  function handleClick(i: number) {
    const _squares = squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    _squares[i] = xIsNext ? 'X' : 'O';
    setSquares(_squares);
    setIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
