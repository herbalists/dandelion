import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import Header from './components/Header/Header.jsx';

const theme = createMuiTheme ({
  palette: {
    primary: green
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
