import React, { Component } from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';
import Header from './components/Header/Header.jsx';

const theme = createMuiTheme ({
  palette: {
    primary: grey
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header/>
          <div>Sidebar</div>
          <div>Main</div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
