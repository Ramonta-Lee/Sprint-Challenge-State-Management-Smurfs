import React from "react";
import { connect } from "react-redux";
import { fetchSmurf, postSmurf } from "../actions";

// form imports from reactstrap

import { useForm } from "react-hook-form";

import { VillagersList } from "./villagersList";

const DisplaySmurf = props => {
  console.log("from display", props);

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
   //this sends the data to the reducer
    props.postSmurf(data);
  };

  return (
    <div className="smurfList-container">
      <h1>Welcome to Smurf Village!</h1>
      <h3>Add your smurf to our village using the form below:</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name:</label>
          <input name="name" placeholder="Name" ref={register} required />
        </div>

        <div>
  <label htmlFor="age">Age:</label>
          <input name="age" placeholder="Age" ref={register} required/>
        </div>

        <div>
          <label htmlFor="height">Height in cm:</label>
          <input name="height" placeholder="Height" ref={register} required/>
        </div>
        <input type="submit" />
      </form>
      <div className="villagers-button">
        <button onClick={props.fetchSmurf} color="success">
          See Villagers
        </button>{" "}
      </div>

      {!props.state.fetchSmurfReducer.isFetching &&
        props.state.fetchSmurfReducer.smurfs.map(smurf => {
          console.log("from map", smurf);
          return <VillagersList smurf={smurf} />;
        })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, { fetchSmurf, postSmurf })(
  DisplaySmurf
);
