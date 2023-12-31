import React, { useState } from "react";
import "./App.css";
import Square from "./components/Square";

const theBoard = ["?", "?", "?", "?", "?", "?", "?", "?", "?"];

const App = () => {
  const [board, setBoard] = useState(theBoard);
  const [counter, setCounter] = useState(5);

  const [treasureLocation, setTreasureLocation] = useState(
    Math.floor(Math.random() * board.length)
  );
  const [bombLocation, setBombLocation] = useState(
    Math.floor(Math.random() * board.length)
  );

  if (treasureLocation === bombLocation)
    setTreasureLocation(Math.floor(Math.random() * board.length));

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
      if (counter === 0) {
        alert("Sorry, you ran out of turns, you lose the Game!");
        restart();
        return;
      }
      updatedBoard[index] = "💎";
      setBoard(updatedBoard);

      setTimeout(function () {
        alert("You Win the Game!");
        restart();
      }, 200);
    } else if (bombLocation === index) {
      if (counter === 0) {
        alert("Sorry, you ran out of turns, you lose the Game!");
        restart();
        return;
      }
      updatedBoard[index] = "💣";
      setBoard(updatedBoard);

      setTimeout(function () {
        alert("You Lose the Game!");
        restart();
      }, 200);
    } else {
      updatedBoard[index] = "🌴";
      setBoard(updatedBoard);
      setCounter((prev) => {
        if (prev > 0) {
          return prev - 1;
        }
      });
    }
    if (counter === 0) {
      alert("Sorry, you ran out of turns, you lose the Game!");
      restart();
    }
  };

  const restart = () => {
    setBoard(theBoard);
    setTreasureLocation(Math.floor(Math.random() * board.length));
    setBombLocation(Math.floor(Math.random() * board.length));
    setCounter(5);
  };

  return (
    <div className="bg-dark text-light pb-5">
      <h1 className="text-danger">Treasure Hunt Game</h1>
      <p className="text-center">
        Remaining Guesses: <span className="text-danger">{counter}</span>
      </p>
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
        className="btn btn-light d-block w-50 m-auto my-5"
      >
        Restart
      </button>
    </div>
  );
};

export default App;
