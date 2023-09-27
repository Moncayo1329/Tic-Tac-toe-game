import React from "react";
import "./board.css";
import { Box } from "./box";

export const Board = ({ board, onClick }) => {
  return (
    <div className="board">
      {board.map((value, idx) => {
       return <Box  value={value} onClick={() => onClick(idx)} />
})}
    </div>
  )
}
