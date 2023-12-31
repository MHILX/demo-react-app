import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyCounter } from '@mhilx/counter-component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome
        <MyCounter /> 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>        
      </header>
    </div>
  );
}

export default App;
