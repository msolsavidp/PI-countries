import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { getByName } from "../../Redux/actions";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar({setCurrentPage}) {

    const dispatch = useDispatch();
    const [country, setCountry] = useState('');

    const handleInput = (e) => {
        e.preventDefault();
        setCountry(e.target.value);
        console.log(country);
        // setCurrentPage(1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getByName(country));
        setCurrentPage(1);
    };


  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="fixed-top">
      <Container fluid>
            <Navbar.Brand href="/home">Countries App</Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange = {(e) => handleInput(e)}
            />
            <Button variant="outline-light" type='submit' onClick={(e) => {handleSubmit(e)}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;