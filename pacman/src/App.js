import './App.css';
import Header from './Header';
import Pacman from './Pacman';
import Fantom from './Fantom';
function App() {
  return (
    <div className="App">
        <Header/>
        <div className='container'>
          <Pacman/>
        </div>
        
    </div>
  );
}

export default App;
