import React from 'react';
import './App.css';
import Title from './components/Title';
import ComicDisplay from './components/ComicDisplay';
import NavButtons from './components/NavButtons';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Title/>
      <ComicDisplay/>
      <NavButtons/>
    </div>
  );
}

export default App;

