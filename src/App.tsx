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

  function newGame(){
    setComputerMove(getRandomMove());
    setPlayerMove(null);
  }

  return (
    <div className="App">
      <div>Computer Move: {playerMove && computerMove }</div>

      <div>Player Move: {playerMove ?? "Make a move!"}</div>
      {
        playerMove ? 
        <>
        <button onClick={()=> newGame()}>New game</button>
        </>
        : <>
          <button onClick={()=>setPlayerMove("rock")}>Rock</button>
          <button onClick={()=>setPlayerMove("paper")}>Paper</button>
          <button onClick={()=>setPlayerMove("scissors")}>Scissors</button>
        </>
      }

    </div>
  );
}

export default App;
