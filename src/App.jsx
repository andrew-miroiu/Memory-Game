import { useState } from 'react'
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import './App.css'

function App() {

  const [gameStarted, setGameStarted] = useState(false);
  const [difficulty, setDifficulty] = useState(null); 


  return (
    <div className="App">
      {gameStarted ? (
        <Game onRestart={() => setGameStarted(false)} difficulty={difficulty}/>
      ) : (
        <StartScreen onStart={(chosenDifficulty) => {
            setDifficulty(chosenDifficulty);
            setGameStarted(true);
          }}/>)}
    </div>
  );
}

export default App
