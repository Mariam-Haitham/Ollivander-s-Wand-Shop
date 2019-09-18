import React from 'react';
import logo from './logo.svg';
import './App.css';
import wands from "./wands";

//components...
import wandsList from "./WandsList"
import WandCard from "./WandCard"
import WandsList from './WandsList';

function App() {
  return (
    <div className="container">
      <div id="app" className="container-fluid">
        <div className="row">
          <WandsList wands={wands} />
        </div>
      </div>
    </div>
  );
}

export default App;
