import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

//material ui components
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Grid, Box, TextField, Typography } from '@material-ui/core';

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
    return (
      // <div>
      <Container style={{ marginTop: '10vh', marginLeft: '3vw' }}>
        <Typography variant='h4' style={{ marginBottom: '2vh' }}>
          Register
        </Typography>
        <Grid
          container
          spacing={2}
          // style={{ marginTop: '10vh', marginLeft: '5vw' }}
        >
          {this.props.errors.registrationMessage && (
            <h2 className='alert' role='alert'>
              {this.props.errors.registrationMessage}
            </h2>
          )}
          <Grid item xs={12} md={6}>
            <TextField
              type='text'
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
            // onClick={this.login}
            style={{ margin: '1vh' }}
            onClick={this.registerUser}
          >
            Register
          </Button>

          <Button
            variant='outlined'
            // className='link-button'
            // onClick={() => {
            //   this.props.dispatch({ type: 'SET_TO_REGISTER_MODE' });
            // }}
            onClick={() => {
              this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' });
            }}
            style={{ margin: '1vh' }}
          >
            Login
          </Button>
        </Grid>
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(Register);

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
