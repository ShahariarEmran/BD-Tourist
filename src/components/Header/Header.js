import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
        <Navbar className="container-fluid" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
            <Container>
                <Navbar.Brand href="#home">BD Tourist</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} to="/services#services">Services</Nav.Link>
                    {user?.email && <Nav.Link as={HashLink} to="/manage#manage">Manage Services</Nav.Link> }
                    {user?.email && <Nav.Link as={HashLink} to="/addService#addService">Add Service</Nav.Link> }
                    {user?.email && <Nav.Link as={HashLink} to="/myBooking#myBooking">My Booking</Nav.Link> }
                    <Nav.Link as={HashLink} to="/about#about">About Us</Nav.Link>
                    {user?.email ?
                            <Button onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    <Navbar.Text>
                    WC: <a href="#login">{user?.displayName}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
};

export default Header;