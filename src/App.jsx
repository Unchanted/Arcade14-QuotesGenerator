import React, { useState } from 'react';
import './App.css';
import QuoteGenerator from './components/QuoteGenerator.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Fake Inspirational Quotes from Celebrity Southerners</h1>
        <QuoteGenerator />
      </header>
    </div>
  );
}

export default App;
