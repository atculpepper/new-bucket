import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Typography, Container } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { withStyles, createStyles, fade } from '@material-ui/core/styles';
import logo from '../../bucket.ico';
import Box from '@material-ui/core/Box';
import heroImage from '../../travel-hero.jpg';
import Card from '../../bucket/Card/Card';

import LoginImage from '../../login.png';
import RegisterImage from '../../register.png';
import BucketImage from '../../bucket (1).png';

// import './LandingPage.css';

// background: linear-gradient(
//   rgba(20,20,20, .5),
//   rgba(20,20,20, .5));
// }

const customStyles = (theme) =>
  createStyles({
    hero: {
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
      height: '40vh',
      width: '100vw',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      fontSize: '4rem',
      [theme.breakpoints.down('sm')]: {
        height: 300,
        fontSize: '2rem',
      },
      // [theme.breakpoints.down('sm')]: {
      //   height: 300,
      //   fontSize: '3em',
      // },
    },
    container: {
      position: 'fixed',
      marginBottom: '10px',
    },
    aboutTitle: {
      backgroundColor: `linear-gradient(rgba(20,20,20, .5), rgba(20,20,20, .5))`,
      // fontWeight: 800,
      // paddingBottom: theme.spacing(3),
    },
    card: {
      marginTop: '5vh',
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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
          // style={{ position: 'fixed', top: '50px', left: 0, margin: 0 }}
        >
          <Box fontWeight='fontWeightRegular' className={classes.aboutTitle}>
            <Typography variant='h3'>Plan your Adventures</Typography>
          </Box>
        </Box>
        <Container className={classes.container}></Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4} className={classes.card}>
            <Card
              title={'About'}
              image={BucketImage}
              text={'Learn more about Bucket'}
              button={'Learn more'}
              className={classes.card}
            ></Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.card}>
            <Card
              title={'Login'}
              image={LoginImage}
              text={'If you have an account, log in here!'}
              button={'Log in Here'}
              className={classes.card}
              // onClick={this.props.history.push('/login')}
            ></Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.card}>
            <Card
              title={'Register'}
              image={RegisterImage}
              text={'Register here to start building your Bucket List.'}
              button={'Register Here'}
              className={classes.card}
            ></Card>
          </Grid>
        </Grid>
        {/* <Container maxWidth='lg' className={classes.container}>
          <Typography
            variant='h4'
            className={classes.aboutTitle}
            color='primary'
          >
            About
          </Typography>
        </Container> */}
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
