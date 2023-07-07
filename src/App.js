
import React from "react";
import { useState } from "react";

function Square({ value, handleClick }) {

  return <button className="square" onClick={handleClick}>{value}</button>;

}

function Board() {

  const [squareValues, setSquareValues] = useState(Array(9).fill(null));

  function squareValueSetter(i) {
    const temp = squareValues.slice();
    // console.log(typeof temp);
    temp[i] = 'X';
    setSquareValues(temp);
  }

  return (
    <React.Fragment>

      <div class="board-row">
        <Square
          value={squareValues[0]}
          handleClick={() => {
            squareValueSetter(0);
          }}
        />

        <Square
          value={squareValues[1]}
          handleClick={() => {
            squareValueSetter(1);
          }}
        />

        <Square
          value={squareValues[2]}
          handleClick={() => {
            squareValueSetter(2);
          }}
        />

      </div>

      <div class="board-row">
        <Square
          value={squareValues[3]}
          handleClick={() => {
            squareValueSetter(3);
          }}
        />

        <Square
          value={squareValues[4]}
          handleClick={() => {
            squareValueSetter(4);
          }}
        />

        <Square
          value={squareValues[5]}
          handleClick={() => {
            squareValueSetter(5);
          }}
        />
      </div>

      <div class="board-row">
        <Square
          value={squareValues[6]}
          handleClick={() => {
            squareValueSetter(6);
          }}
        />

        <Square
          value={squareValues[7]}
          handleClick={() => {
            squareValueSetter(7);
          }}
        />

        <Square
          value={squareValues[7]}
          handleClick={() => {
            squareValueSetter(8);
          }}
        />
      </div>

    </React.Fragment>
  );
}


export default Board;