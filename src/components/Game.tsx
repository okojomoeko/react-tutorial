import React from "react";
import Board from "./Board";
import calculateWinner from "../controller/calculateWinner";

export default function Game() {
  const [xIsNext, setIsNext] = React.useState(true);
  const [history, setHistory] = React.useState([
    { squares: Array(9).fill(null), moveLoc: { col: 0, row: 0 } },
  ]);
  const [stepNumber, setStepNumber] = React.useState(0);
  const [moveIsAsc, setMoveSort] = React.useState(true);

  function handleClick(i: number) {
    const _history = history.slice(0, stepNumber + 1);
    const current = _history[_history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const col = i % 3;
    const row = Math.floor(i / 3);
    squares[i] = xIsNext ? "X" : "O";
    setHistory([
      ..._history,
      { squares: squares, moveLoc: { col: col, row: row } },
    ]);
    setIsNext(!xIsNext);
    setStepNumber(_history.length);
  }

  function jumpTo(step: number) {
    setStepNumber(step);
    setIsNext(step % 2 === 0);
  }

  const _history = history;
  const current = _history[stepNumber];
  const winner = calculateWinner(current.squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const moves = _history.map((step, move) => {

    let desc = move
      ? `Go to move #${move} (col: ${history[move].moveLoc.col} row: ${history[move].moveLoc.row})`
      : "Go to game start";

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{stepNumber === move ? <strong>{desc}</strong> : desc}</button>

      </li>
    );
  });

  function handleSortMove() {
    setMoveSort(!moveIsAsc);
    console.log(moveIsAsc)
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i: number) => {
            handleClick(i);
          }}
        />
      </div>
      <div className="sort-button">
        <button onClick={handleSortMove}>Sort Move</button>
      </div>
      <div className="game-info">
        <div>{status}</div>
        {moveIsAsc ? <ol>{moves}</ol> : <ol>{moves.reverse()}</ol>}
      </div>
    </div>
  );
}
