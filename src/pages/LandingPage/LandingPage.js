import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Paper, Typography, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles, createStyles, fade } from '@material-ui/core/styles';
import logo from '../../bucket.ico';
import Box from '@material-ui/core/Box';

// import './LandingPage.css';

const customStyles = (theme) =>
  createStyles({
    paper: {
      marginTop: '80px',
      padding: '15px',
      paddingTop: '20px',
    },
    heading: {
      //   margin: '10px',
      paddingTop: '15px',
    },
    imageContainer: {
      backgroundImage: `url(${logo})`,
    },
    paragraph: {
      margin: '10px',
      marginTop: '15px',
      paddingTop: '15px',
    },
    button: {
      //   padding: '5px',
      margin: '10px',
      marginBottom: '15px',
    },
    hero: {
      backgroundImage: `linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)), url('https://images.unsplash.com/photo-1473625247510-8ceb1760943f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2499&q=80')`,
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
        <Box className={classes.hero}>
          <Box>Bucket</Box>
        </Box>
        {/* <Paper color='inherit'>
          <Container className={classes.imageContainer} />
          <Container>
            {/* <Typography
              className={classes.heading}
              variant='h5'
              color='primary'
            >
              {this.state.heading}
            </Typography> */}
        {/* <Container className={classes.heading}>
              <Typography variant='h7'>
                Welcome to Bucket! Bucket is an application that will help you
                to develop, store, and explore the Bucket List of experiences
                that you want to have within your lifetime. If you are already a
                user, login with your username and password to access your
                Bucket List. If you are not yet a Bucket user, click Register to
                create an account with us.
              </Typography>
            </Container> */}
        {/* <Typography className={classes.heading} variant='h7'>
            Welcome to Bucket! Bucket is an application that will help you to
            develop, store, and explore the Bucket List of experiences that you
            want to have within your lifetime. If you are already a user, login
            with your username and password to access your Bucket List. If you
            are not yet a Bucket user, click Register to create an account with
            us.
          </Typography> */}
        {/* <Container>
              <Typography className={classes.heading} variant='h6'>
                Already a Member?
              </Typography>
            </Container>

            <Button
              className={classes.button}
              variant='contained'
              color='secondary'
              onClick={this.onLogin}
            >
              Login
            </Button>
          </Container>
        </Paper> */}
      </div>
    );
  }
}

export default withStyles(customStyles)(connect(mapStoreToProps)(LandingPage));
