import './App.css';
import Header from './Header';
import Jeu from './Jeu';
import Fantom from './Fantom';
function App() {
  return (
    <div className="App">
        <Header/>
        <div className='container'>
          <Jeu/>
        </div>
        
    </div>
  );
}

export default App;
