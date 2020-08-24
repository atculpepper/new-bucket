import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Grid, Typography, Container } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';
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
          {/* <Link to={'/about'}> */}
          <Grid item xs={12} sm={6} md={4} className={classes.card}>
            <Card
              title={'About'}
              image={BucketImage}
              text={'Learn more about Bucket'}
              button={'Learn more'}
              className={classes.card}
              href={'#about'}
              // onClick={() => this.props.history.push('/about')}
            ></Card>
          </Grid>
          {/* </Link> */}

          <Grid item xs={12} sm={6} md={4} className={classes.card}>
            <Card
              title={'Login'}
              image={LoginImage}
              text={'If you have an account, log in here!'}
              button={'Log in Here'}
              className={classes.card}
              href={'#login'}
            ></Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4} className={classes.card}>
            <Card
              title={'Register'}
              image={RegisterImage}
              text={'Register here to start building your Bucket List.'}
              button={'Register Here'}
              className={classes.card}
              href={'#admin'}
            ></Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withRouter(
  withStyles(customStyles)(connect(mapStoreToProps)(LandingPage))
);
