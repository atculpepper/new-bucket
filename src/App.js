import React from 'react';
import logo from './bucket.ico';
// import './App.css';
import Header from './bucket/Header';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header color='primary' />
      {/* <header className="App-header"> */}
      <img src={logo} className='App-logo' alt='logo' />
    </div>
  );
}

export default App;
