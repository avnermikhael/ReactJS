import React from "react";
import { Container, Col } from "reactstrap";
import Navigation from "./navigation";

const Main = props => {
  return (
    <>
      <Navigation />
      <Container fluid={true} className="mt-2">
        <Col>{props.children}</Col>
        <footer className="py-4">
          <div className="container text-center">
            <span className="text-muted">Copyright @Avner</span>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Main;
