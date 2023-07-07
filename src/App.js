
import React from "react";
import { useState } from "react";

function Square({ value, handleClick }) {

  return <button className="square" onClick={handleClick}>{value}</button>;

}

function Board() {

  const [squareValues, setSquareValues] = useState(Array(9).fill(null));

  function squareValueSetter() {
    const temp = squareValues.slice();
    console.log(typeof temp);
    temp[0] = 'X';
    setSquareValues(temp);
  }

  return (
    <React.Fragment>

      <div class="board-row">
        <Square value={squareValues[0]} handleClick={squareValueSetter} />
        <Square value={squareValues[1]} handleClick={squareValueSetter} />
        <Square value={squareValues[2]} handleClick={squareValueSetter} />
      </div>

      <div class="board-row">
        <Square value={squareValues[3]} handleClick={squareValueSetter} />
        <Square value={squareValues[4]} handleClick={squareValueSetter} />
        <Square value={squareValues[5]} handleClick={squareValueSetter} />
      </div>

      <div class="board-row">
        <Square value={squareValues[6]} handleClick={squareValueSetter} />
        <Square value={squareValues[7]} handleClick={squareValueSetter} />
        <Square value={squareValues[8]} handleClick={squareValueSetter} />
      </div>

    </React.Fragment>
  );
}


export default Board;