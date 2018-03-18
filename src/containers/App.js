import React from "react";
import sudoku from "sudoku-umd";
import Board from "../presentations/Board";
import styles from "./App.css";
import swal from "sweetalert";

class App extends React.Component {
  constructor(props) {
    super(props);
    const initialBoard = sudoku.generate("easy", false);
    const correctAnswers = initialBoard.split("").map(() => true);
    this.state = {
      initialBoard,
      board: initialBoard,
      correctAnswers
    }
  };

  handleSubmit(event) {
    event.preventDefault();
  };

  updateInput(event, index) {
    const tile = event.target.value ? event.target.value[0] : ".";
    this.setState((prev) => ({
      board: prev.board.slice(0, index) + tile.toString() + prev.board.slice(index + 1)
    }));
    event.preventDefault();
  };

  checkIfCorrect() {
    const solution = sudoku.solve(this.state.initialBoard).split("");
    const answer = this.state.board.split("");
    const correctAnswers = answer.map((item, key) => item == solution[key]);
    
    this.setState({
      correctAnswers
    });
    
    if (answer.toString() == solution.toString()) {
      swal("Great!", "You have won", "success");
    };
  };

  solveBoard() {
    this.setState({
      board: sudoku.solve(this.state.initialBoard)
    });
  };
  
  resetBoard() {
    const initialBoard = sudoku.generate("easy", false);
    const correctAnswers = initialBoard.split("").map(() => true);
    this.setState({
      board: this.state.initialBoard,
      correctAnswers
    });
  };

  newBoard() {
    const initialBoard = sudoku.generate("easy", false);
    const correctAnswers = initialBoard.split("").map(() => true);

    this.setState({
      initialBoard: initialBoard,
      board: initialBoard,
      correctAnswers
    });
  };

  render() {
    return (
      <div className={styles.App}>
        <h1>Sudoku</h1>
        <Board
          board={this.state.board}
          initialBoard={this.state.initialBoard}
          fill={this.updateInput.bind(this)}
          correctAnswers={this.state.correctAnswers}
          handleSubmit={this.handleSubmit.bind(this)}
        />
        <div className="buttons">
          <button onClick={this.checkIfCorrect.bind(this)}>Check</button>
          <button onClick={this.newBoard.bind(this)}>New game</button>
          <button onClick={this.solveBoard.bind(this)}>Solve</button>
          <button onClick={this.resetBoard.bind(this)}>Restart</button>
        </div>
      </div>
    )
  }
}

export default App;