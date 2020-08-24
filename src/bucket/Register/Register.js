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

class Register extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Container component='main' maxWidth='xs'>
        <div className={classes.paper}>
          <Typography variant='h5' component='h1'>
            Register
          </Typography>
          <form className={classes.form} noValidate>
            {this.props.store.errors.loginMessage && (
              <Typography className='alert' role='alert'>
                {this.props.store.errors.loginMessage}
              </Typography>
            )}
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

            <Button
              variant='outlined'
              onClick={this.login}
              className={classes.submit}
              color='primary'
              fullWidth
            >
              Register
            </Button>
            <Grid item>
              <Link
                href='#admin'
                variant='body2'
                onClick={() =>
                  this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' })
                }
              >
                {'Already have an account? Login'}
              </Link>
            </Grid>
          </form>
        </div>
      </Container>
      // // <div>
      // <Container style={{ marginTop: '10vh', marginLeft: '3vw' }}>
      //   <Typography variant='h4' style={{ marginBottom: '2vh' }}>
      //     Register
      //   </Typography>
      //   <Grid
      //     container
      //     spacing={2}
      //     // style={{ marginTop: '10vh', marginLeft: '5vw' }}
      //   >
      //     {this.props.errors.registrationMessage && (
      //       <h2 className='alert' role='alert'>
      //         {this.props.errors.registrationMessage}
      //       </h2>
      //     )}
      //     <Grid item xs={12} md={6}>
      //       <TextField
      //         type='text'
      //         fullWidth
      //         variant='outlined'
      //         label='Username'
      //         required
      //         // onSubmit={this.login}
      //         value={this.state.username}
      //         onChange={this.handleInputChangeFor('username')}
      //       />
      //     </Grid>
      //     <Grid item xs={12} md={6}>
      //       <TextField
      //         type='text'
      //         placeholder='Password'
      //         fullWidth
      //         variant='outlined'
      //         label='Password'
      //         required
      //         // onSubmit={this.login}
      //         value={this.state.password}
      //         onChange={this.handleInputChangeFor('password')}
      //       />
      //     </Grid>

      //     <Button
      //       variant='outlined'
      //       // onClick={this.login}
      //       style={{ margin: '1vh' }}
      //       onClick={this.registerUser}
      //     >
      //       Register
      //     </Button>

      //     <Button
      //       variant='outlined'
      //       // className='link-button'
      //       // onClick={() => {
      //       //   this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' });
      //       // }}
      //       onClick={() => {
      //         this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' });
      //       }}
      //       style={{ margin: '1vh' }}
      //     >
      //       Login
      //     </Button>
      //   </Grid>
      // </Container>
    );
  }
}

export default withStyles(customStyles)(connect(mapStoreToProps)(Register));

//  {/* <form className='formPanel' onSubmit={this.registerUser}>
//           <h1>Register User</h1>
//           <div>
//             <label htmlFor='username'>
//               Username:
//               <input
//                 type='text'
//                 name='username'
//                 value={this.state.username}
//                 onChange={this.handleInputChangeFor('username')}
//               />
//             </label>
//           </div>
//           <div>
//             <label htmlFor='password'>
//               Password:
//               <input
//                 type='password'
//                 name='password'
//                 value={this.state.password}
//                 onChange={this.handleInputChangeFor('password')}
//               />
//             </label>
//           </div>
//           <div>
//             <input
//               className='register'
//               type='submit'
//               name='submit'
//               value='Register'
//             />
//           </div>
//         </form>
//         <center>
//           <button
//             type='button'
//             className='link-button'
//             onClick={() => {
//               this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' });
//             }}
//           >
//             Login
//           </button>
//         </center>
//       </div> */}
