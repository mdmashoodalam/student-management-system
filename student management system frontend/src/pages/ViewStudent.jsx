import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { Container, Card, Row, Col, Button, Spinner } from 'react-bootstrap';
import { toast } from 'react-toastify';
import StudentService from '../services/StudentService';

const ViewStudent = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        StudentService.getStudentById(id)
            .then(response => {
                setStudent(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading student:', error);
                toast.error('Failed to load student details');
                navigate('/students');
            });
    }, [id, navigate]);
    
    if (loading) {
        return (
            <Container className="mt-4 text-center">
                <Spinner animation="border" variant="primary" />
                <p className="mt-3">Loading student details...</p>
            </Container>
        );
    }
    
    return (
        <Container className="mt-4">
            <Card className="card-custom">
                <Card.Header className="bg-info text-white">
                    <h3 className="mb-0">Student Details</h3>
                </Card.Header>
                <Card.Body>
                        <Row className="mb-3">
                            <Col xs={12} md={6}>
                                <h5 className="text-muted">ID</h5>
                                <p className="fs-5 text-break">{student.id}</p>
                            </Col>
                            <Col xs={12} md={6}>
                                <h5 className="text-muted">Full Name</h5>
                                <p className="fs-5 text-break">{student.firstName} {student.lastName}</p>
                            </Col>
                        </Row>
                    
                    <Row className="mb-3">
                        <Col xs={12} md={6}>
                            <h5 className="text-muted">Email</h5>
                            <p className="fs-5 text-break">{student.email}</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <h5 className="text-muted">Phone</h5>
                            <p className="fs-5 text-break">{student.phone}</p>
                        </Col>
                    </Row>
                    
                    <Row className="mb-3">
                        <Col xs={12} md={6}>
                            <h5 className="text-muted">Department</h5>
                            <p className="fs-5 text-break">{student.department}</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <h5 className="text-muted">Date of Birth</h5>
                            <p className="fs-5">{student.dateOfBirth ? new Date(student.dateOfBirth).toLocaleDateString() : '-'}</p>
                        </Col>
                    </Row>
                    
                    <Row className="mb-4">
                        <Col xs={12} md={6}>
                            <h5 className="text-muted">Gender</h5>
                            <p className="fs-5 text-break">{student.gender}</p>
                        </Col>
                    </Row>
                    
                    <div className="d-flex gap-2 flex-column flex-md-row">
                        <Button 
                            as={Link}
                            to={`/edit-student/${student.id}`}
                            variant="warning"
                            className="btn-custom w-100 w-md-auto"
                        >
                            Edit Student
                        </Button>
                        <Button 
                            variant="secondary" 
                            onClick={() => navigate('/students')}
                            className="btn-custom w-100 w-md-auto"
                        >
                            Back to List
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ViewStudent;
