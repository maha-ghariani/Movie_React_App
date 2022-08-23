import './App.css';
import Header from './Components/Header';
import List from './Components/List';
import {movies} from './data';
import {useState} from 'react';

function App() {
  const [films,setFilms]=useState(movies);
  const [caractere,setCaractere]=useState('');
  const [rate,setRate]=useState(0);
  return (
    <div className="App">
      <Header setCaractere={setCaractere}  setRate={setRate}  />
      <List films={films} caractere={caractere} rate={rate} />
    </div>
  );
}

export default App;
