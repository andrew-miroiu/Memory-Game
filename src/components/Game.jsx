import React from "react";
import { useEffect, useState } from "react";
import Card from "./Card";

function Game({ difficulty, onRestart }) {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [clickedCards, setClickedCards] = useState([]);
  const [bestScore, setBestScore] = useState(0);
    useEffect(() => {
    const fetchRandomPage = async () => {
      try {
        // Pick a random page between 1 and 5
        const randomPage = Math.floor(Math.random() * 20) + 1;
        const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${randomPage}`);
        const data = await res.json();

        // Shuffle the results and pick "difficulty" number of characters
        const shuffled = data.results.sort(() => 0.5 - Math.random());
        setCards(shuffled.slice(0, difficulty));
      } catch (error) {
        console.error(error);
      }
    };

    fetchRandomPage();
  }, [difficulty]);
  const handleCardClick = (cardId) => {
    if (clickedCards.includes(cardId)) {
      alert("Game Over! You clicked the same card twice.");
      setScore(0);
      setClickedCards([]);
        if (score > bestScore) {
            setBestScore(score);
        }
    } else {
      setClickedCards(prev => [...prev, cardId]);
      setScore(prev => prev + 1);
        console.log(clickedCards)
      if (score + 1 === difficulty) {
        const finalScore = score + 1;
        setBestScore(finalScore);
        setScore(prev => prev + 1);
        setClickedCards([]);
        
        alert("Congratulations! You've won!");
        setScore(0);
        
      }
        // Shuffle cards after each click
        setCards(prevCards => prevCards.sort(() => 0.5 - Math.random()));
    }
  };

  return (
    <div>
        <h2>Score: {score}</h2>
        <h2>Best Score: {bestScore}</h2>
        <h1>Game Screen</h1>
      <button onClick={onRestart}>Restart</button>
      <div
            className="cards-grid"
            >
            {cards.map(card => (
                <Card key={card.id} name={card.name} image={card.image} onClick={() => handleCardClick(card.id)}/>
            ))}
        </div>
    </div>
  );
}


export default Game;