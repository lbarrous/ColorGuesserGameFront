import './App.css';
import { Game } from './components/game/Game';

function App() {
  return (
    <div className="App">
      <div>
      <h2 className='title'> Color Guesser Game </h2>
      <Game gameId="" maxAttempts={5}/>      
    </div>
    </div>
  );
}

export default App;
