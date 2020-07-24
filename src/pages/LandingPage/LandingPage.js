import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Paper, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles, createStyles, fade } from '@material-ui/core/styles';

// import './LandingPage.css';

const customStyles = (theme) =>
  createStyles({
    paper: {
      marginTop: '80px',
      padding: '10px',
      paddingTop: '10px',
    },
    heading: {
      margin: '10px',
    },
    paragraph: {
      margin: '10px',
    },
    button: {
      //   padding: '5px',
      margin: '10px',
    },
  });

class LandingPage extends Component {
  state = {
    heading: 'Bucket',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.paper}>
        <Paper color='inherit'>
          <Typography className={classes.heading} variant='h4'>
            {this.state.heading}
          </Typography>
          <Typography variant='h7' className={classes.heading}>
            Welcome to Bucket! Bucket is an application that will help you to
            develop, store, and explore the Bucket List of experiences that you
            want to have within your lifetime. If you are already a user, login
            with your username and password to access your Bucket List. If you
            are not yet a Bucket user, click Register to create an account with
            us.
          </Typography>
          {/* <Typography className={classes.heading} variant='h7'>
            Welcome to Bucket! Bucket is an application that will help you to
            develop, store, and explore the Bucket List of experiences that you
            want to have within your lifetime. If you are already a user, login
            with your username and password to access your Bucket List. If you
            are not yet a Bucket user, click Register to create an account with
            us.
          </Typography> */}
          <Typography className={classes.heading} variant='h6'>
            Already a Member?
          </Typography>

          <Button
            className={classes.button}
            variant='contained'
            color='secondary'
            onClick={this.onLogin}
          >
            Login
          </Button>
        </Paper>
      </div>
    );
  }
}

export default withStyles(customStyles)(connect(mapStoreToProps)(LandingPage));
