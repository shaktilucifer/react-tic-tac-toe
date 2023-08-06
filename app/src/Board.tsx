import React from "react";
import "./Board.css";

function useBoardConfig() {}

function Board() {
  function BoardRow() {
    return (
      <>
        <div className="boardRow">
          <div className="boardCell"></div>
          <div className="boardCell"></div>
          <div className="boardCell"></div>
        </div>
      </>
    );
  }

  return (
    <div className="board">
      <BoardRow />
      <BoardRow />
      <BoardRow />
    </div>
  );
}

export default Board;
