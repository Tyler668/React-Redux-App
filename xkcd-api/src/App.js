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
    Axios.get(`https://cors-anywhere.herokuapp.com/https://xkcd.com/614/info.0.json`)
    .then(res =>{
       console.log(res.data)
    })
   
}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



// let url = '';
// fetch(url)
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Something broke');
//         }
//         return response.json();
        
//     })
//     .then(data => console.log(data))
//     .catch(err => console.log(err));