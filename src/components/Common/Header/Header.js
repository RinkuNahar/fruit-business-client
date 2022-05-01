import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/fruits-logo.png';
import './Header.css'

const Header = () => {
    return (
        <div>
             <Navbar bg="light" variant="dark">
    <Container>
    <Navbar.Brand href="#home" className='nav-logo'>
        <img src={logo} alt="" />
        <span className='text-dark pt-4'>Juicy Shop</span>
    </Navbar.Brand>
    <Nav className="me-auto text-dark">
      <Nav.Link className='text-dark' href="#home">Home</Nav.Link>
      <Nav.Link className='text-dark' href="#features">Features</Nav.Link>
      <Nav.Link className='text-dark' href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;