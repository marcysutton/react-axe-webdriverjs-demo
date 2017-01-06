import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Demo App</h2>
        </div>
        <div className="App-intro">
          <p className="h2-style">How do bacon novelty items get that bacon smell?</p>
          <p>
            Bacon ipsum dolor amet brisket venison tongue corned beef pork belly ground round alcatra.
            Capicola meatloaf pastrami, biltong bresaola hamburger beef ribeye rump flank shankle
            brisket meatball t-bone.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
