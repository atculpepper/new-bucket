import React from 'react';
import { connect } from 'react-redux';

//material ui components
import Button from '@material-ui/core/Button';

const LogOutButton = (props) => (
  <Button
    onClick={() => props.dispatch({ type: 'LOGOUT' })}
    color='inherit'
    variant='outlined'
  >
    Log Out
  </Button>
);

export default connect()(LogOutButton);
