import './App.css';
import Header from './Components/Header';
import List from './Components/List';
import {movies} from './data';
import {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from './Components/Details';
import NotFoundPage from "./Components/NotFoundPage";
function App() {
  const [films,setFilms]=useState(movies);
  const [caractere,setCaractere]=useState('');
  const [rate,setRate]=useState(0);
  return (
      <BrowserRouter>
      <Header setCaractere={setCaractere}  setRate={setRate}  />
      <Routes>
      <Route path='/' element={<List films={films} caractere={caractere} rate={rate} />}/>
      <Route path='/Details/:id' element={<Details films={films}/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
