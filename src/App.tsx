import {useState} from 'react';
import './App.css';

const MOVES = ["rock", "paper", "scissors"] as const;
type Move = (typeof MOVES)[number];

function getRandomMove(): Move {
  return MOVES[Math.floor(Math.random() * 3)];
}
getRandomMove();
function App() {
  const [computerMove, setComputerMove] = useState<Move>(getRandomMove());
  const [playerMove, setPlayerMove] = useState<Move | null>(null);

  return (
    <div className="App">
      <div>Computer Move: {computerMove}</div>

      <div>Player Move: {playerMove ?? "Make a move!"}</div>
      <button onClick={()=>setPlayerMove("rock")}>Rock</button>
      <button onClick={()=>setPlayerMove("paper")}>Paper</button>
      <button onClick={()=>setPlayerMove("scissors")}>Scissors</button>
    </div>
  );
}

export default App;
