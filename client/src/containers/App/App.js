import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import './App.css';

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
        <CssBaseline />
        <Grid container spacing={0}>
          <Grid item xs={12}><Header/></Grid>
          <Grid item xs={3}><Sidebar/></Grid>
          <Grid item xs={9}><Dashboard/></Grid>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App;
