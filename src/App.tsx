import { useEffect, useState } from 'react';
import './App.css';
import { BoardComponent } from './components/BoardComponent';
import LostFigureComponent from './components/LostFigureComponent';
import Time from './components/TimeComponent';
import { Board } from './models/Board';
import { Color } from './models/Collor';
import { Player } from './models/Player';

function App() {

  const [board, setBoard] = useState(new Board());
  const [whitePlayer, setWhitePlayer] = useState<Player>(new Player(Color.WHITE));
  const [blackPlayer, setBlackPlayer] = useState<Player>(new Player(Color.BLACK));
  const [currentPlayer, setCarrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
    setCarrentPlayer(whitePlayer);
  }, [])

  function restart() {
    let newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigure();
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCarrentPlayer(currentPlayer?.color === Color.WHITE ? blackPlayer : whitePlayer)
  }

  return (
      <div className="app">
        <Time currentPlayer={currentPlayer} restart={restart}/>
        <BoardComponent
          board={board}
          setBoard={setBoard}
          carrentPlayer={currentPlayer}
          swapPlayer={swapPlayer}
        />
        <div>
        <LostFigureComponent 
        title='White Figure'
        lostFigure={board.lostWhiteFigure}
        />
        <LostFigureComponent 
        title='Black Figure'
        lostFigure={board.lostBlackFigure}
        />
      </div>
      </div>
  );
}

export default App;
