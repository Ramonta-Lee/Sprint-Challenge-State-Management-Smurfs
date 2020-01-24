import React from "react";
import { connect } from "react-redux";
import { fetchSmurf } from "../actions";

// form imports from reactstrap
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const DisplaySmurf = props => {
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
        {}
        <Button onClick={props.fetchSmurf} color="success">
          See Villagers
        </Button>{" "}
      </Form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isFetching: state.isFetching,
    smurfs: state.smurfs,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchSmurf })(DisplaySmurf);
