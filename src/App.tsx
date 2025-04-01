import {useState} from 'react';
import './App.css';

type Move = "rock" | "paper" | "scissors";
const MOVES: readonly Move[] = ["rock", "paper", "scissors"];

function getRandomMove(): Move {
  return MOVES[Math.floor(Math.random() * 3)];
}
getRandomMove();
function App() {
  const [computerMove, setComputerMove] = useState<Move>(getRandomMove());
  return (
    <div className="App">
      <div>Computer Move: {computerMove}</div>
    </div>
  );
}

export default App;
