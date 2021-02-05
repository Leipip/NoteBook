import logo from './logo.svg';
import './App.css';
import React from 'react';
//import helpers from "/.helpers.js";
//import './Notepad';

class App extends React.Component{
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <div className="App">
  <h2>Welcome to Notebook</h2>
        <header className="App-header">
        
          <button className ="open">Open</button>
          
        </header>
        
      </div>
      
    );
  }
}


export default App;
