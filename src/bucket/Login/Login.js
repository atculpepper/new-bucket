import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//material ui components
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Grid, Box, TextField, Typography } from '@material-ui/core';

class Login extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    return (
      <Container style={{ marginTop: '10vh', marginLeft: '3vw' }}>
        <Typography variant='h4'>Login</Typography>
        <Grid
          container
          spacing={2}
          // style={{ marginTop: '10vh', marginLeft: '5vw' }}
        >
          {this.props.store.errors.loginMessage && (
            <h2 className='alert' role='alert'>
              {this.props.store.errors.loginMessage}
            </h2>
          )}
          <Grid item xs={12} md={6}>
            <TextField
              type='text'
              placeholder='New Title'
              fullWidth
              variant='outlined'
              label='Username'
              required
              // onSubmit={this.login}
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              type='text'
              placeholder='Password'
              fullWidth
              variant='outlined'
              label='Password'
              required
              // onSubmit={this.login}
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />
          </Grid>

          <Button
            variant='outlined'
            onClick={this.login}
            style={{ margin: '1vh' }}
          >
            Login
          </Button>

          <Button
            variant='outlined'
            // className='link-button'
            onClick={() => {
              this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' });
            }}
            style={{ margin: '1vh' }}
          >
            Register
          </Button>
        </Grid>
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(Login);
