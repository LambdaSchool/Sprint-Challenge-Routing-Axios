import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      smurf: {
        name: '',
        age: '',
        height: ''
      }
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        this.setState({ smurfs: response.data });
        console.log(response);
      })
      .catch(err => console.log(err));
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  render() {
    return (
      <div className="App">
        <div className="nav-bar">
          <NavLink
            exact
            to="/smurfs"
            className="nav-button"
            activeClassName="active-nav-button"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/smurf-form"
            className="nav-button"
            activeClassName="active-nav-button"
          >
            Add a Smurf!
          </NavLink>
        </div>
        <Route
          exact
          path="/smurf-form"
          render={props => <SmurfForm {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          exact
          path="/smurfs"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
      </div>
    );
  }
}

export default App;
