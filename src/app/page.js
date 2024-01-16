"use client";
import { useState } from "react";

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [toggleX, setToggleX] = useState(true);

  function clickSquare(index) {
    if (squares[index] || winnerIs(squares)) return;

    const newSquares = squares.slice();
    newSquares[index] = toggleX ? "X" : "O";
    setToggleX(!toggleX);
    setSquares(newSquares);
  }

  // w
  const winner = winnerIs(squares);

  return (
    <>
      {winner ? (
        <p>Winner is {winner}</p>
      ) : (
        <p>Next Player: {toggleX ? "X" : "O"}</p>
      )}

      <div className="squares-row">
        <Square value={squares[0]} onClick={() => clickSquare(0)} />
        <Square value={squares[1]} onClick={() => clickSquare(1)} />
        <Square value={squares[2]} onClick={() => clickSquare(2)} />
      </div>

      <div className="squares-row">
        <Square value={squares[3]} onClick={() => clickSquare(3)} />
        <Square value={squares[4]} onClick={() => clickSquare(4)} />
        <Square value={squares[5]} onClick={() => clickSquare(5)} />
      </div>

      <div className="squares-row">
        <Square value={squares[6]} onClick={() => clickSquare(6)} />
        <Square value={squares[7]} onClick={() => clickSquare(7)} />
        <Square value={squares[8]} onClick={() => clickSquare(8)} />
      </div>
    </>
  );
}

function winnerIs(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default function Game() {
  return (
    <div>
      <Board />
    </div>
  );
}
