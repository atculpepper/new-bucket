import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Button from '@material-ui/core/Button';
import { Grid, Typography, Container } from '@material-ui/core';
import { withStyles, createStyles } from '@material-ui/core/styles';

const customStyles = (theme) =>
  createStyles({
    container: {
      position: 'fixed',
      marginBottom: '10px',
    },
  });

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = (props) => (
  <div>
    <Container style={{ marginTop: '15vh' }}>
      <h1 id='welcome'>Welcome, {props.store.user.username}!</h1>
      <p>Your ID is: {props.store.user.id}</p>
      <Button color='inherit' />
    </Container>
  </div>
);

// this allows us to use <App /> in index.js
export default withStyles(customStyles)(connect(mapStoreToProps)(UserPage));
