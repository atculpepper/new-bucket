import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Login from '../Login/Login';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontFamily: 'Roboto',
  },

  heading: {
    margin: 'auto',
  },
}));

const Header = () => {
  const classes = useStyles();

  // onLogin = (event) => {
  //   this.props.history.push('/login');
  // };

  return (
    <AppBar
      position='static'
      style={{ position: 'fixed', top: 0, left: 0, margin: 0 }}
    >
      <Toolbar>
        <IconButton
          edge='start'
          className={classes.menuButton}
          color='inherit'
          aria-label='menu'
        >
          <MenuIcon color='inherit' />
        </IconButton>
        <Typography className={classes.title} color='secondary' variant='h5'>
          Bucket
        </Typography>
        {/* <Link component='button' to='/login'> */}
        <Router>
          <Button href='#login' color='inherit'>
            Login
          </Button>
        </Router>
        {/* </Link> */}
      </Toolbar>
    </AppBar>
  );
};

export default connect(mapStoreToProps)(Header);
