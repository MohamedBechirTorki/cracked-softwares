import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function Application({ app }) {
  return (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={app.pic} style={{ padding: "10px" }} />
      <Card.Body>
        <Card.Title>{app.title}</Card.Title>
        <Card.Text>{app.paragraph}</Card.Text>
        <Button variant="primary">Download</Button>
      </Card.Body>
    </Card>
  );
}
