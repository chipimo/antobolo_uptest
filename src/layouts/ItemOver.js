import React from "react";
import { Container, Row, Col } from "shards-react";
import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainFooter from "../components/layout/MainFooter";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";

export default function ItemOver({ children, noNavbar, noFooter }) {
  return (
    <Container fluid>
      <Row>
        <MainSidebar />
        <Col
          className="main-content p-0"
          lg={{ size: 10, offset: 2 }}
          md={{ size: 9, offset: 3 }}
          sm="12"
          tag="main"
        >
            {!noNavbar && <MainNavbar />}
            {children}
            {!noFooter && <MainFooter />}
        </Col>
      </Row>
    </Container>
  );
}
