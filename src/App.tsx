import {useState} from 'react';
import './App.css';

const MOVES = ["rock", "paper", "scissors"] as const;
type Move = (typeof MOVES)[number];

type GameResults = { wins: number, losses: number, draws: number};

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
  const [{wins, losses, draws}, setGameResults] = useState<GameResults>({wins: 0, losses: 0, draws: 0});

  function newGame(){
    setComputerMove(getRandomMove());
    setPlayerMove(null);
  }

  const handleMove = (move: Move) => {
    setPlayerMove(move);
    switch (getWinner(move, computerMove)) {
      case "a": {
        setGameResults({wins: wins + 1, losses, draws});
        break;
      }
      case "b": {
        setGameResults({wins: wins, losses: losses + 1, draws});
        break;
      }
      case "tie" : {
        setGameResults({wins, losses, draws: draws + 1});
        break;
      }
    }
  }

  if(playerMove == null) {
    return (
      <div className="App">
          <div>Player Move: {playerMove ?? "Make a move!"}</div>
          <button onClick={()=>handleMove("rock")}>Rock</button>
          <button onClick={()=>handleMove("paper")}>Paper</button>
          <button onClick={()=>handleMove("scissors")}>Scissors</button>
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
      <div>Computer Move: {computerMove}</div>
      <div>Your Move: {playerMove}</div>
      <div>{winnerText}</div>
      <div>Wins: {wins} - Losses: {losses} - Draws: {draws}</div>
      <button onClick={newGame}>New game</button>
    </div>
  );
}

export default App;
