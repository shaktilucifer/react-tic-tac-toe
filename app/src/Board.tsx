import React, { useCallback, useEffect, useState } from "react";
import "./Board.css";

function useBoardConfig() {
  const [boardState, setBoardState] = useState([
    ["x", "x", "x"],
    ["", "", ""],
    ["", "", ""],
  ]);
  useEffect(() => {
    console.log(boardState);
  }, [boardState]);

  const updateBoardState = useCallback(
    (row: number, col: number, mark: string) => {
      console.log({ row, col, mark });

      setBoardState((boardState) => {
        const currentBoardState = [...boardState];
        currentBoardState[row][col] = mark;
        return currentBoardState;
      });
    },
    [setBoardState]
  );

  return {
    boardState,
    updateBoardState,
  };
}

interface BoardRowProps {
  rowValues?: string[];
  rowNum: number;
}

function Board() {
  const { boardState, updateBoardState } = useBoardConfig();

  function BoardRow({ rowValues, rowNum }: BoardRowProps) {
    return (
      <>
        <div className="boardRow">
          {rowValues?.map((value: string, idx: number) => (
            <div
              onClick={() => updateBoardState(rowNum, idx, "S")}
              className="boardCell"
            >
              {value}
            </div>
          ))}
        </div>
      </>
    );
  }
  console.log({ boardState });
  return (
    <div className="board">
      <BoardRow rowValues={boardState?.[0]} rowNum={0} />
      <BoardRow rowValues={boardState?.[1]} rowNum={1} />
      <BoardRow rowValues={boardState?.[2]} rowNum={2} />
    </div>
  );
}

export default Board;
