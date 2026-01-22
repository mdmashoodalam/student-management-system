import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';
import { FaUserPlus, FaEdit, FaTrashAlt, FaSearch, FaEye, FaFileAlt } from 'react-icons/fa';

const Home = () => {
    return (
        <div>
            <div className="home-hero">
                <Container>
                    <h1>Welcome to Student Management System</h1>
                    <p>Efficiently manage student records with ease</p>
                    <div className="d-flex justify-content-center gap-3">
                        <Button 
                            as={Link} 
                            to="/students" 
                            variant="light" 
                            size="lg"
                            className="btn-custom"
                        >
                            View Students
                        </Button>
                        <Button 
                            as={Link} 
                            to="/add-student" 
                            variant="outline-light" 
                            size="lg"
                            className="btn-custom"
                        >
                            Add New Student
                        </Button>
                    </div>
                </Container>
            </div>
            
            <div className="features-section">
                <Container>
                    <h2>Key Features</h2>
                    <div className="features-grid">
                        <Link to="/add-student" className="feature-card-link">
                            <div className="feature-card">
                                <div className="feature-icon"><FaUserPlus /></div>
                                <h4>Add Students</h4>
                                <p>Easily add new student records with comprehensive details</p>
                            </div>
                        </Link>

                        <Link to="/students" className="feature-card-link">
                            <div className="feature-card">
                                <div className="feature-icon"><FaEdit /></div>
                                <h4>Update Records</h4>
                                <p>Modify student information whenever needed</p>
                            </div>
                        </Link>

                        <Link to="/students" className="feature-card-link">
                            <div className="feature-card">
                                <div className="feature-icon"><FaTrashAlt /></div>
                                <h4>Delete Students</h4>
                                <p>Remove student records securely</p>
                            </div>
                        </Link>

                        <Link to="/students" className="feature-card-link">
                            <div className="feature-card">
                                <div className="feature-icon"><FaSearch /></div>
                                <h4>Search & Filter</h4>
                                <p>Find students by name or filter by department</p>
                            </div>
                        </Link>

                        <Link to="/students" className="feature-card-link">
                            <div className="feature-card">
                                <div className="feature-icon"><FaEye /></div>
                                <h4>View Details</h4>
                                <p>Access complete student information at a glance</p>
                            </div>
                        </Link>

                        <Link to="/students" className="feature-card-link">
                            <div className="feature-card">
                                <div className="feature-icon"><FaFileAlt /></div>
                                <h4>Pagination</h4>
                                <p>Navigate through large datasets efficiently</p>
                            </div>
                        </Link>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Home;
