import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core';
import React from 'react';

import { LandingPage } from './pages/LandingPage';

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      main: "#4f7f73",
      dark: "#245C4E",
      light: "#afc5bf",
    },
    secondary: {
      main: "#e8bdc8",
      light: "#f3dde3",
      dark: "#dfa2b1"
    },
    contrast: "#ffffff"
  },
  typography: {
    fontFamily: [
      'Renogare Regular',
      "AppleSDGothicNeo-Light",
      "Avenir-Light",
      "Helvetica",
      "Verdana",
      "Roboto"
    ].join(','),
  },
  navbarHeight: "50px"
}));



function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
