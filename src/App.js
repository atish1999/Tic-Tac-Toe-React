
import React from "react";

function Square() {

  return <button className="square">X</button>;

}

function Board() {
  return (
    <React.Fragment>
      <Square />
    </React.Fragment>
  );
}


export default Board;