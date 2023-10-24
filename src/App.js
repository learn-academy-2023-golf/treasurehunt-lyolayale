import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square";

const theBoard = ["?", "?", "?", "?", "?", "?", "?", "?", "?"];

const App = () => {
  const [board, setBoard] = useState(theBoard);

  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  );

  console.log(
    "Treasure Location:",
    treasureLocation,
    "Bomb Location:",
    bombLocation
  );

  const handleGamePlay = (index) => {
    // alert(index);
    let updatedBoard = [...board];
    if (treasureLocation === index) {
      updatedBoard[index] = "💎";
      setBoard(updatedBoard);
    } else if (bombLocation === index) {
      updatedBoard[index] = "💣";
      setBoard(updatedBoard);
    } else {
      updatedBoard[index] = "🌴";
      setBoard(updatedBoard);
    }
  };

  const restart = () => {
    setBoard(theBoard);
    setTreasureLocation(Math.floor(Math.random() * board.length));
    setBombLocation(Math.floor(Math.random() * board.length));
  };

  return (
    <>
      <h1>Treasure Hunt Game</h1>
      <div className="gameboard">
        {board.map((square, index) => (
          <Square
            key={index}
            square={square}
            index={index}
            handleGamePlay={handleGamePlay}
          />
        ))}
      </div>
      <button
        onClick={restart}
        className="btn btn-dark d-block w-50 m-auto my-5"
      >
        Restart
      </button>
    </>
  );
};

export default App;
