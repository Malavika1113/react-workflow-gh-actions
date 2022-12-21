import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./App.css";
import React from 'react';
function App() {

  return (
    <div className="App w-100 min-vh-100 justify-content-center align-items-center d-flex flex-column">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
	  <Card.Text>HI</Card.Text>
          <Button variant="primary">
            Hello
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
