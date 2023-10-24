import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square";

const App = () => {
  const [board, setBoard] = useState([
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
    "?",
  ]);

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
    </>
  );
};

export default App;
