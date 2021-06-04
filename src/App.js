import './App.css';
import Navbar from './components/Navbar';
import Pokemon from './components/Pokemon';

function App() {
  return (
    <div>
      <Navbar />
      <Pokemon name="Lionheart" species="Gallade" />
    </div>
  );
}

export default App;
