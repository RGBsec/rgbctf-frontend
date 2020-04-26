import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Tickbox from './components/Tickbox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          epic ui test page
        </p>
        <a
          className="App-link"
          href="https://rgbsec.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
         it begins
        </a>
      </header>
      <Button>pee</Button>
      <Tickbox name={"oogabooga"}>ooga booga</Tickbox>
    </div>
  );
}

export default App;
