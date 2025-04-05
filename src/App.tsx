import {useState} from 'react';
import './App.css';

const MOVES = ["rock", "paper", "scissors"] as const;
type Move = (typeof MOVES)[number];

function getRandomMove(): Move {
  return MOVES[Math.floor(Math.random() * 3)];
}

function getWinner(moveA: Move, moveB: Move) : 'a' | 'b' | 'tie' {
  if(moveA === moveB) return "tie";

  const indexA = MOVES.indexOf(moveA);
  const indexB = MOVES.indexOf(moveB);

  return (indexA + 1 % MOVES.length === indexB ? "b" : "a");
}

function App() {
  const [computerMove, setComputerMove] = useState<Move>(getRandomMove());
  const [playerMove, setPlayerMove] = useState<Move | null>(null);

  function newGame(){
    setComputerMove(getRandomMove());
    setPlayerMove(null);
  }
  if(playerMove == null) {
    return (
      <div className="App">
          <div>Player Move: {playerMove ?? "Make a move!"}</div>
          <button onClick={()=>setPlayerMove("rock")}>Rock</button>
          <button onClick={()=>setPlayerMove("paper")}>Paper</button>
          <button onClick={()=>setPlayerMove("scissors")}>Scissors</button>
      </div>
    )
  }

  const winnerText = {
    a: "You win.",
    b: "You lose.",
    tie: "It's a tie."
  }[getWinner(playerMove, computerMove)];

  return (
    <div className="App">
      <div>Computer Move: {computerMove }</div>
      <div>Your Move: {playerMove }</div>
      <div>{winnerText}</div>
      <button onClick={newGame}>New game</button>
    </div>
  );
}

export default App;
