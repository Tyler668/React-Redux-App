import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import Axios from 'axios';
import Title from './components/Title';
import ComicDisplay from './components/ComicDisplay';
import NavButtons from './components/NavButtons';


function App() {

  useEffect(() => {
    Axios.get(`https://cors-anywhere.herokuapp.com/https://xkcd.com/1/info.0.json`)
    .then(res =>{
       console.log(res.data)
    })
   
}, []);

  return (
    <div className="App">
      <Title/>
      <ComicDisplay/>
      <NavButtons/>
    </div>
  );
}

export default App;

