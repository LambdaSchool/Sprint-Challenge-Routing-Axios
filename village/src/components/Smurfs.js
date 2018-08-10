import React, { Component } from 'react';
import {Link, } from 'react-router-dom'; 
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <Link key ={smurf.id} to = {{
                pathname: `/${smurf.id}`,
                state: {
                  name: smurf.name,
                  id: smurf.id,
                  age: smurf.age,
                  height: smurf.height,
                  key: smurf.id
                }
              }}>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              /> </Link>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
