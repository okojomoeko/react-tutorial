import React from 'react'
import Square from './Square';

export default function Board() {
  const [squares, setSquares] = React.useState(Array(9).fill(null));

  function renderSquare(i: number) {
    return <Square value={squares[i]} onClick={() => handleClick(i)}></Square>
  }

  function handleClick(i: number) {
    const _squares = squares.slice();
    _squares[i] = 'X';
    setSquares(_squares);
  }

  const status = 'Next player: X';

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
