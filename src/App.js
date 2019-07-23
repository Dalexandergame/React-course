import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <div>
        <Counter initialNumber={0}/>
        <Counter initialNumber={-10}/>
        <Counter initialNumber={5}/>
        <Counter initialNumber={38}/>
      </div>
    </div>
  );
}

export default App;
