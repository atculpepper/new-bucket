import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Paper, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

// import './LandingPage.css';

class LandingPage extends Component {
  state = {
    heading: 'Bucket',
  };

  onLogin = (event) => {
    this.props.history.push('/login');
  };

  render() {
    return (
      <Paper color='inherit'>
        <h2>{this.state.heading}</h2>

        <div>
          <div>
            <p>
              Welcome to Bucket! Bucket is an application that will help you to
              develop, store, and explore the Bucket List of experiences that
              you want to have within your lifetime. If you are already a user,
              login with your username and password to access your Bucket List.
              If you are not yet a Bucket user, click Register to create an
              account with us.
            </p>
          </div>
          <div>
            <h3>Already a Member?</h3>
            <Button
              variant='contained'
              color='secondary'
              onClick={this.onLogin}
            >
              Login
            </Button>
          </div>
        </div>
      </Paper>
    );
  }
}

export default connect(mapStoreToProps)(LandingPage);
