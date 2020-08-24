import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//material ui components
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Grid, Box, TextField, Typography } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

//material ui styles
const customStyles = (theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing(12),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  });

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
    const { classes } = this.props;

    return (
      <Container
        component='main'
        maxWidth='xs'
        // style={{ marginTop: '10vh', marginLeft: '3vw' }}
      >
        <div className={classes.paper}>
          <Typography variant='h5' component='h1'>
            Login
          </Typography>
          <form className={classes.form} noValidate>
            {/* <Grid
            container
            spacing={2}
          > */}
            {this.props.store.errors.loginMessage && (
              <Typography className='alert' role='alert'>
                {this.props.store.errors.loginMessage}
              </Typography>
            )}
            {/* <Grid item xs={12} md={6}> */}
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='username'
              label='Username'
              name='username'
              autoComplete='username'
              autoFocus
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />
            {/* </Grid> */}
            {/* <Grid item xs={12} md={6}> */}
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />
            {/* </Grid> */}

            <Button
              variant='outlined'
              onClick={this.login}
              // style={{ margin: '1vh' }}
              className={classes.submit}
              color='primary'
              fullWidth
            >
              Login
            </Button>

            {/* <Button
              variant='outlined'
              // className='link-button'
              onClick={() => {
                this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' });
              }}
              // style={{ margin: '1vh' }}
              className={classes.submit}
            >
              Register
            </Button> */}
            <Grid item>
              <Link
                href='#admin'
                variant='body2'
                onClick={() =>
                  this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' })
                }
              >
                {"Don't have an account? Register"}
              </Link>
            </Grid>
            {/* </Grid> */}
          </form>
        </div>
      </Container>
    );
  }
}

export default withStyles(customStyles)(connect(mapStoreToProps)(Login));
