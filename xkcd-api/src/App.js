import React from 'react';
import './App.css';
import Title from './components/Title';
import ComicDisplay from './components/ComicDisplay';
import NavButtons from './components/NavButtons';
import './App.scss';


function App() {
  return (
    <div className="App">
      <div className="content">
        <Title />
        <ComicDisplay />
        <NavButtons />
      </div>
    </div>
  );
}

export default App;

