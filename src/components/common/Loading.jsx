import React from "react";
import { Spinner, Row, Card, CardBody } from "reactstrap";

const Loading = ({ label = "Loading" }) => {
  return (
    <Card className="question-card">
      <CardBody>
        <Row className="justify-content-center">
          <Spinner animation="border" role="status" color="white" />
          <h5 className="row justify-content-center mt-2 question-text">
            {label}
          </h5>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Loading;
