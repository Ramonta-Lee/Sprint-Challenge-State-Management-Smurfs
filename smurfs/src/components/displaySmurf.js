import React from "react";
import { connect } from "react-redux";
import { fetchSmurf } from "../actions";

// form imports from reactstrap
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { VillagersList } from "./villagersList";

const DisplaySmurf = props => {
  console.log("from display", props);
  return (
    <div className="smurfList-container">
      <h1>Welcome to Smurf Village!</h1>
      <h3>Add your smurf to our village using the form below:</h3>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="exampleEmail" className="mr-sm-2">
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="something@idk.cool"
            required
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="don't tell!"
            required
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label for="examplePassword" className="mr-sm-2">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="don't tell!"
            required
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
      <Button onClick={props.fetchSmurf} color="success">
        See Villagers
      </Button>
      {console.log("after click", props.state.fetchSmurfReducer.isFetching)}
      {props.state.fetchSmurfReducer.smurfs &&
        !props.state.fetchSmurfReducer.isFetching &&
        props.state.fetchSmurfReducer.smurfs.map(smurf => {
          console.log("from map", smurf);
          return <VillagersList smurf={smurf} />;
        })}
      ;
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(mapStateToProps, { fetchSmurf })(DisplaySmurf);
