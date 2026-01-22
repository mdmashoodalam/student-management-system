import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
    const location = useLocation();
    
    return (
        <BootstrapNavbar bg="dark" variant="dark" expand="lg" sticky="top">
            <Container>
                <BootstrapNavbar.Brand as={Link} to="/">
                    <i className="bi bi-mortarboard-fill me-2"></i>
                    Student Management System
                </BootstrapNavbar.Brand>
                <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BootstrapNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link 
                            as={Link} 
                            to="/" 
                            active={location.pathname === '/'}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/students" 
                            active={location.pathname === '/students'}
                        >
                            Students
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/add-student" 
                            active={location.pathname === '/add-student'}
                        >
                            Add Student
                        </Nav.Link>
                    </Nav>
                </BootstrapNavbar.Collapse>
            </Container>
        </BootstrapNavbar>
    );
};

export default Navbar;
