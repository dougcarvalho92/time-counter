import React from "react";
import { Container, Navbar } from "react-bootstrap";
import ListTimer from "./components/ListTimer";

function App() {
  return (
    <>
      <Navbar bg="light" className="justify-content-center">
        <Navbar.Brand>Time Counter</Navbar.Brand>
      </Navbar>
      <Container className="justify-content-center align-items-center">
        <ListTimer />
      </Container>
    </>
  );
}

export default App;
