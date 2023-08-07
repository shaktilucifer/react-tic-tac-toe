import React, { useCallback, useEffect, useState } from "react";
import "./Board.css";

function useBoardConfig() {
  const [boardState, setBoardState] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [currentMark, setCurrentMark] = useState("o");
  useEffect(() => {
    console.log(boardState);
  }, [boardState]);

  const updateBoardState = useCallback(
    (row: number, col: number, mark: string) => {
      // do not update board if mark is already set
      if (!!boardState[row][col]) {
        console.log(boardState);
        return;
      }

      setBoardState((boardState) => {
        const currentBoardState = [...boardState];
        currentBoardState[row][col] = mark;
        return currentBoardState;
      });
      toggleMark();
    },
    [setBoardState, boardState]
  );

  const resetBoardState = () => {
    setBoardState([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setCurrentMark("o");
  };

  const toggleMark = () => {
    setCurrentMark((currentMark: string) => {
      return currentMark === "x" ? "o" : "x";
    });
  };

  return {
    boardState,
    updateBoardState,
    resetBoardState,
    currentMark,
  };
}

interface BoardRowProps {
  rowValues?: string[];
  rowNum: number;
}

function Board() {
  const { boardState, updateBoardState, resetBoardState, currentMark } =
    useBoardConfig();

  const handleClick = (row: number, col: number) => {
    updateBoardState(row, col, currentMark);
  };

  function BoardRow({ rowValues, rowNum }: BoardRowProps) {
    return (
      <>
        <div className="boardRow">
          {rowValues?.map((value: string, idx: number) => (
            <div onClick={() => handleClick(rowNum, idx)} className="boardCell">
              {value}
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <div>
      <button onClick={() => resetBoardState()}>Reset</button>
      <div className="board">
        <BoardRow rowValues={boardState?.[0]} rowNum={0} />
        <BoardRow rowValues={boardState?.[1]} rowNum={1} />
        <BoardRow rowValues={boardState?.[2]} rowNum={2} />
      </div>
    </div>
  );
}

export default Board;
