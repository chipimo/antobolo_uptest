import React from "react";
import { Card, Col, Button } from "shards-react";
import Login from "./Login";

export default function UserAuth() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        color: "#ccc"
      }}
    >
      <Col lg="8" className="mb-4">
        <Card
          style={{ backgroundColor: "#2D314D", overflow: "hidden" }}
          small
          className="mb-4"
        >
          <div style={{ width: "100%", display: "flex" }}>
            <div
              style={{
                width: "40%",
                height: 450,
                display: "flex",
                justifyContent: "center"
              }}
            >
              <div style={{ marginTop: 90 }}>
                <img
                  id="main-logo"
                  className="d-inline-block align-top mr-1"
                  style={{ maxWidth: "200px" }}
                  src={require("../../images/LOGO-whait.png")}
                  alt="Antobolo"
                />
              <div style={{marginTop:50, marginLeft:20}}>
                <Button
                  pill
                  outline
                  size="sm"
                  className="mb-4"
                >
                  Login with Facebook
                </Button>
              </div>
              </div>
            </div>
            <div style={{ backgroundColor: "#fff", width: "60%" }}>
              <Login />
            </div>
          </div>
        </Card>
      </Col>
    </div>
  );
}
