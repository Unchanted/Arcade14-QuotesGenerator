import React from 'react';
import './App.css';
import QuoteGenerator from './components/QuoteGenerator.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-8"> Inspirational Quotes from Celebrity Southerners</h1>
        <QuoteGenerator />
      </header>
    </div>
  );
}

export default App;
