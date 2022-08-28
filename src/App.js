
import './App.css';
import BarChart from './components/BarChart';
import CharacterInfo from './components/CharacterInfo';

function App() {
  return (

    <div className="App">
      <header className="App-header">
        <h1>Tikal home assigment</h1>
      </header>
      <div className="main">
        <CharacterInfo />
        <BarChart />
      </div>

    </div>
  );
}

export default App;
