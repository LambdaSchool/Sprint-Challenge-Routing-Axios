import React from 'react';

const SmurfForm = props => {
  return (
    <div className="SmurfForm">
      <form onSubmit={props.addSmurf}>
        <input
          onChange={props.onChange}
          placeholder="name"
          value={props.name}
          name="name"
          autoComplete="off"
        />
        <input
          onChange={props.onChange}
          placeholder="age"
          value={props.age}
          name="age"
          autoComplete="off"
        />
        <input
          onChange={props.onChange}
          placeholder="height"
          value={props.height}
          name="height"
          autoComplete="off"
        />
        <button type="submit">Add to the village</button>
      </form>
    </div>
  );
}

export default SmurfForm;
