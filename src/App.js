import React from 'react';
import logo from './ressources/img/hundertachtzigrad.png';
import './App.css';
import { responsiveFontSizes, createMuiTheme, ThemeProvider, Typography } from '@material-ui/core'
import bg from './ressources/img/foto.jpg'
const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    // error: will use the default color
  },
  typography: {
    fontFamily: [
      'Avenir Heavy',
      "AppleSDGothicNeo-Light",
      "Avenir-Light",
      "Helvetica",
      "Verdana",
      "Roboto"
    ].join(','),
  },

}));


//font: Avenir Heavy
//logo color: #245c4e;
function App() {
  return (
    <div className="App"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: "auto 100%",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100%",
  }}>
      <ThemeProvider theme={theme}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="h4">
            Hier kommt bald was!
        </Typography>


        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
