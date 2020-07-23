import React from 'react';
import logo from './bucket.ico';
import './App.css';
import Header from './bucket/Header';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    height: '100vh',
    // backgroundImage: { logo },
  },
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header color='primary' />
      {/* <img src={logo} className='App-logo' alt='logo' /> */}
    </div>
  );
}

export default App;
