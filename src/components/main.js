import React from "react";
import { Container, Col } from "reactstrap";
import Navigation from "./navigation";

const Main = props => {
  return (
    <>
      <Navigation />
      <Container fluid={true} className="mt-2">
        <Col>{props.children}</Col>
        <footer class="footer">
          <div class="container">
            <span class="text-muted">Copyright @Avner</span>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Main;
