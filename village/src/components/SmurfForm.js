import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../actions';

class SmurfForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
    this.addOrEditSmurf = this.addOrEditSmurf.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateAge = this.updateAge.bind(this);
    this.updateHeight = this.updateHeight.bind(this);
  }

  addOrEditSmurf(event) {
    event.preventDefault();
    this.props.addSmurf(this.state);
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateAge(event) {
    this.setState({
      age: event.target.value
    });
  }

  updateHeight(event) {
    this.setState({
      height: event.target.value
    });
  }

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addOrEditSmurf}>
          <input
            onChange={this.updateName}
            placeholder="name"
            value={this.state.name}
          />
          <input
            onChange={this.updateAge}
            placeholder="age"
            value={this.state.age}
          />
          <input
            onChange={this.updateHeight}
            placeholder="height"
            value={this.state.height}
          />
          <button type="submit">Add/edit smurf</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(mapStateToProps, { addSmurf })(SmurfForm);