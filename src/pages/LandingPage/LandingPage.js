import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Paper, Typography, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles, createStyles, fade } from '@material-ui/core/styles';
import logo from '../../bucket.ico';
import Box from '@material-ui/core/Box';
import heroImage from '../../irish-road.jpg';

// import './LandingPage.css';

const customStyles = (theme) =>
  createStyles({
    // paper: {
    //   marginTop: '80px',
    //   padding: '15px',
    //   paddingTop: '20px',
    // },
    // heading: {
    //   //   margin: '10px',
    //   paddingTop: '15px',
    // },
    // imageContainer: {
    //   backgroundImage: `url(${logo})`,
    // },
    // paragraph: {
    //   margin: '10px',
    //   marginTop: '15px',
    //   paddingTop: '15px',
    // },
    // button: {
    //   //   padding: '5px',
    //   margin: '10px',
    //   marginBottom: '15px',
    // },
    hero: {
      backgroundImage: `url(${heroImage})`,
      width: '100vw',
      height: '40vh',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      fontSize: '4rem',
      fontFamily: 'Roboto',
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
      <div>
        <Box
          className={classes.hero}
          style={{ position: 'fixed', top: '50px', left: 0, margin: 0 }}
        >
          <Box fontWeight='fontWeightRegular' fontStyle='italic'>
            <Typography variant='h3'>Build your Adventure</Typography>
          </Box>
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
