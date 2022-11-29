import { useState } from 'react';
import './App.css';
import Header from './Header';
import Jeu from './Jeu';
function App() {
  const [score , setScore] = useState(0)
  const [pacmanDirection , setPacmanDirection ]= useState("")
  return (
    <div className="App">
        <Header score={score} pacmanDirection={pacmanDirection}/>
        <div className='container'>
          <Jeu setScore={setScore} setPacmanDirection={setPacmanDirection}/>
        </div>
        
    </div>
  );
}

export default App;
