import React from "react";
import { Spinner, Row, Card, CardBody } from "reactstrap";

const Loading = ({ label = "Loading" }) => {
  return (
    <Card>
      <CardBody>
        <Row className="justify-content-center">
          <Spinner animation="border" role="status" />
          <h5 className="row justify-content-center mt-2">{label}</h5>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Loading;
