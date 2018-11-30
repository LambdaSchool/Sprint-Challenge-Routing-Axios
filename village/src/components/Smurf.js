import React from 'react';
import styled from 'styled-components';

const SmurfCard = styled.div`
  max-width: 400px;
  margin: 20px auto;
  background-color: #fff;
  border: 5px solid #222;
  border-radius: 20px;
`

const Smurf = props => {
  return (
    <SmurfCard>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </SmurfCard>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

