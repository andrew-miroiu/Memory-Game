import React from "react";

function StartScreen({ onStart }) {
  const handleStart = (level) => {
    onStart(level); // send chosen difficulty to App
  };

  return (
    <div className="start-screen">
      <h1>Memory Game</h1>
      <h2><strong>Rules: </strong>Click each card only once — if you click the same card twice, the game is over!</h2>
      <p>Select Difficulty:</p>
      <button onClick={() => handleStart(6)}>Easy (6 cards)</button>
      <button onClick={() => handleStart(12)}>Medium (12 cards)</button>
      <button onClick={() => handleStart(18)}>Hard (18 cards)</button>
    </div>
  );
}

export default StartScreen;