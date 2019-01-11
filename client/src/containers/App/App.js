import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

const theme = createMuiTheme ({
  palette: {
    primary: {
      main: '#3A7CA5'
    }
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="app">
          <Header/>
          <Sidebar/>
          <Dashboard/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;