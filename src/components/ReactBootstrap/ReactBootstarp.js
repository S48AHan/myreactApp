import React from "react";
import { CardBody } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ReactBootstarp() {
  return (
    <Card style={{ width: "30rem" }} className="p-1">
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Lordsad sdfd f rew r sdfds d weffdg werw r fdsfd sfre good
        </Card.Text>
        <Button variant="danger">Learn More</Button>
      </Card.Body>
    </Card>
  );
}
