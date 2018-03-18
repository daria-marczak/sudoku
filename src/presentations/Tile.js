import React from "react";
import styles from "./Tile.css";

const Tile = props => (
  <input
    type="number"
    min="1"
    max="9"
    className={(props.correct == "true" ? "" : styles.TileWrong)}
    {...props}
  />
);


export default Tile;