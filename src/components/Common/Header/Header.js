import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/fruits-logo.png';
import './Header.css'

const Header = () => {
  return (
    <div>

     
<Navbar collapseOnSelect expand="lg" className='navbar bg-dark' sticky='top' variant="dark" >
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img className='logo-img' src={logo} alt="" />
                        <span className='logo-title headline'>Juicy Warehouse</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link as={Link} to="home#services" className='headline'>Services</Nav.Link> */}
                            <Nav.Link as={Link}  to="/supplies" className='headline'>Supplies</Nav.Link>
                            <Nav.Link as={Link} to="home#reviews" className='headline'>Reviews</Nav.Link>

                        </Nav>
                        <Nav>
                            {/* <Nav.Link as={Link} to="about" className='headline'>About</Nav.Link>
                            <Nav.Link as={Link} to="blog" className='headline'>Blog</Nav.Link> */}
                         
                            {
                            // user ?
                            //     <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</button>
                            //     :
                                <Nav.Link as={Link} to="login" className='headline'>
                                Login
                            </Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </div>
  );
};

export default Header;
