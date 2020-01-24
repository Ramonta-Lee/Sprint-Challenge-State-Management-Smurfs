import React from "react";
import { Card, Button, CardTitle, CardText } from "reactstrap";

export const VillagersList = props => {
  console.log("from villagers", props);
  
  return (
    <div className="villagers-list">
      <Card body inverse color="primary">
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>
          With supporting text below as a natural lead-in to additional content.
        </CardText>
      </Card>
    </div>
  );
};
