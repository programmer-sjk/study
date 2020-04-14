import React from 'react';
import logo from './logo.svg';
import Parent from './components/parent.js'
import './App.css';

function App() {
  return (
    <div className="App">
      <Parent name="Sara"></Parent>
      <Parent name="Seo Jeong Kuk"></Parent>
      <Parent name="Jo su hyun"></Parent>
    </div>
  );
}

export default App;

