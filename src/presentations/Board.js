import React from "react";
import ReactDOM from "react-dom";
import styles from "./Board.css";
import sudoku from "sudoku-umd";
import Tile from "./Tile";

const Board = props => {
  const tiles = props.board
    .split("")
    .map((item, index) => (
      <Tile
        key={index}
        value={item === "." ? "" : item}
        correct={props.correctAnswers[index].toString()}
        disabled={props.initialBoard[index] !== "."}
        onChange={e => props.fill(e, index)}
      />
    ));

  return <form className={styles.Board} onSubmit={props.handleSubmit}>{tiles}</form>;
};

export default Board;