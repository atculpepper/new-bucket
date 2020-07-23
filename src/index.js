import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';
import Nunito from './Nunito-Black.ttf';

const nunito = {
  fontFamily: 'Nunito',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
};

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#62efff',
      main: '#00bcd4',
      dark: '#008ba3',
      contrastText: '#000',
    },
    secondary: {
      light: '#ffff72',
      main: '#ffeb3b',
      dark: '#c8b900',
      contrastText: '#000',
    },
    typography: {
      fontFamily: [
        'Nunito',
        // 'Helvetica Neue',
        // "'Montserrat', sans-serif",
        // 'BlinkMacSystemFont',
        // '"Segoe UI"',
        // 'Roboto',
        // 'Arial',
        // 'sans-serif',
        // '"Apple Color Emoji"',
        // '"Segoe UI Emoji"',
        // '"Segoe UI Symbol"',
      ].join(','),
    },
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [nunito],
        },
      },
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
