import React, { Component } from 'react';
import './App.css';
import Header from './containers/App/components/Header/Header.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
      </div>
    );
  }
}

export default App;