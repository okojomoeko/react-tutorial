import React from 'react'
import Square from './Square';
import calculateWinner from '../controller/calculateWinner'

export default function Board(props: any) {


  function renderSquare(i: number) {
    return <Square key={i} value={props.squares[i]} onClick={() => props.onClick(i)}></Square>
  }


  const renderSquares = (() => {
    let rows = [];

    for (let i = 0; i < 3; i++) {
      let row = []
      for (let j = 0; j < 3; j++) {
        row.push(renderSquare(i * 3 + j))

      }
      rows.push(
        <div key={i} className="board-row">
          {row}
        </div>
      );
    }
    return rows;
  })();
  return (

    <div>
      {renderSquares}

    </div>
  );
}
