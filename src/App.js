import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './app/components/Header';
import Home from './app/components/Home';


function App() {
  return (
    <div className="App">
      <Header />
      <Home />
  
    </div>
  );
}

export default App;
