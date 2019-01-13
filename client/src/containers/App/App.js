import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Header from './components/Header/Header.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Grid from '@material-ui/core/Grid';

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
        {/* <Header/>
        <Sidebar/>
        <Dashboard/> */}
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
