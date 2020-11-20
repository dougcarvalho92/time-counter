import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListTimer from "./components/ListTimer";

function App() {
  return (
    <Container className="justify-content-center align-items-center">
      <ListTimer />
    </Container>
  );
}

export default App;
