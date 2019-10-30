import React from "react";
import { Card, Col, CardHeader } from "shards-react";
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
            <div style={{ width: "40%", height: 450 }}>ff</div>
            <div style={{ backgroundColor: "#fff", width: "60%" }}>
              <Login />
            </div>
          </div>
        </Card>
      </Col>
    </div>
  );
}
