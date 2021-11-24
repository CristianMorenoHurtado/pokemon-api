import './index.css';
import Home from './components/Home';
import Nav from './components/Nav';
import { useState } from 'react';
import CardList from './components/CardList';


function App() {
  const [cards, setCards] = useState([]) 

  return (
    <div className="App">
      <Nav />
      <Home setCards={setCards} />
      <div><CardList cards={cards} /></div>
      
    </div>
  );
}

export default App;
