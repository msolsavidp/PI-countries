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
import { Link, useLocation } from 'react-router-dom';

function NavBar({setCurrentPage}) {
    const location = useLocation();
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
            <Navbar.Brand href="/home">
            <img src="https://res.cloudinary.com/db2uxwhbq/image/upload/v1678818534/4417105_cdn_connected_globe_dots_earth_icon_t5oxy3.png" alt="logo" style={{ width: '30px' }} />
             Countries App</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            {/* <Nav.Link href="/about">About</Nav.Link> */}
            <Nav.Link href="/activities">Create activity</Nav.Link>
          </Nav>

          { location.pathname === '/home' ?
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange = {(e) => handleInput(e)}
            />
            <Button variant="outline-light" type='submit' onClick={(e) => {handleSubmit(e)}}>Search</Button>
          </Form> : null
      }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;