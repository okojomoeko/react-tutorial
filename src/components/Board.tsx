import React from 'react'
import Square from './Square';
import calculateWinner from '../controller/calculateWinner'
import { isUndefined } from 'util';

export default function Board(props: any) {


  function renderSquare(i: number) {
    let square = <Square key={i} value={props.squares[i]} onClick={() => props.onClick(i)} style={{ background: "white" }}></Square>;
    if (!isUndefined(props.play)) {
      props.play.forEach((e: number) => {
        if (e === i) {
          square = <Square key={i} value={props.squares[i]} onClick={() => props.onClick(i)} style={{ background: "salmon" }}></Square>;
        }
      });
    }

    return square
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
