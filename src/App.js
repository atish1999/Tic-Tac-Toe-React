
import React from "react";

function Square() {

  return <button className="square">X</button>;

}

function Board() {
  return (
    <React.Fragment>
      
      <div class="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div class="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div class="board-row">
        <Square />
        <Square />
        <Square />
      </div>

    </React.Fragment>
  );
}


export default Board;