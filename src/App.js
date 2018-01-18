import React from 'react';

import headerImg from './images/DD-Transparent.png';
import './App.css';

import ProfileContainer from './components/ProfileContainer'
import { Link } from 'react-router-dom'

class App extends React.Component {

  constructor(){
    super();
  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={headerImg} className="App-logo" alt="logo" />
          <h1 className="App-title">Character Sheet</h1>
          <Link to='/'>Login</Link>
          <Link to='/character'>Character</Link>
        </header>
        <ProfileContainer/> 
      </div>
    );
  }
}

export default App
