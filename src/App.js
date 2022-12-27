import logo from './logo.svg';
import './App.css';
import React from 'react';
import Clock from './Clock';
import Tasks from './Tasks';


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h4>to do list</h4>
       <Clock />
       <Tasks />
      </header>
    </div>
  );
}

export default App;
