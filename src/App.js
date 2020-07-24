import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import 'fontsource-roboto';

//bringing in unique components
import Header from './bucket/Header/Header';
import ProtectedRoute from './bucket/ProtectedRoute/ProtectedRoute';
import Login from './bucket/Login/Login';
import Register from './bucket/Register/Register';
import AboutPage from './pages/AboutPage/AboutPage';
import UserPage from './pages/UserPage/UserPage';
import LandingPage from './pages/LandingPage/LandingPage';

//custom theme to wrap App in
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#62efff',
      main: '#00bcd4',
      dark: '#008ba3',
      contrastText: '#000',
    },
    secondary: {
      light: '#ffff72',
      main: '#ffeb3b',
      dark: '#c8b900',
      contrastText: '#000',
    },
    // typography: {
    //   fontFamily: 'Roboto',
    // },
  },
});

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    // const classes = useStyles();
    return (
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <Header />
            <Switch>
              {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
              <Redirect exact from='/' to='/home' />
              {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
              <Route exact path='/about' component={AboutPage} />
              <Route exact path='/home' component={LandingPage} />
              {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
              <ProtectedRoute exact path='/admin' component={UserPage} />
              {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
              {/* <ProtectedRoute exact path='/info' component={InfoPage} /> */}
              {/* This works the same as the other protected route, except that if the user is logged in,
            they will be redirected to the authRedirect path provided. */}
              <ProtectedRoute
                exact
                path='/login'
                authRedirect='/admin'
                component={Login}
              />
              <ProtectedRoute
                exact
                path='/registration'
                authRedirect='/admin'
                component={Register}
              />

              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

export default connect()(App);
