import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import StudentService from '../services/StudentService';

const AddStudent = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [student, setStudent] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        department: '',
        dateOfBirth: '',
        gender: ''
    });
    
    const departments = ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Electrical', 'IT'];
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };
    
    const validateForm = () => {
        const newErrors = {};
        
        if (!student.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        } else if (student.firstName.length < 2 || student.firstName.length > 50) {
            newErrors.firstName = 'First name must be between 2 and 50 characters';
        }
        
        if (!student.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        } else if (student.lastName.length < 2 || student.lastName.length > 50) {
            newErrors.lastName = 'Last name must be between 2 and 50 characters';
        }
        
        if (!student.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(student.email)) {
            newErrors.email = 'Please provide a valid email address';
        }
        
        if (!student.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^[0-9]{10}$/.test(student.phone)) {
            newErrors.phone = 'Phone number must be 10 digits';
        }
        
        if (!student.department) {
            newErrors.department = 'Department is required';
        }
        
        if (!student.dateOfBirth) {
            newErrors.dateOfBirth = 'Date of birth is required';
        } else if (new Date(student.dateOfBirth) >= new Date()) {
            newErrors.dateOfBirth = 'Date of birth must be in the past';
        }
        
        if (!student.gender) {
            newErrors.gender = 'Gender is required';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            StudentService.createStudent(student)
                .then(() => {
                    toast.success('Student added successfully!');
                    navigate('/students');
                })
                .catch(error => {
                    console.error('Error adding student:', error);
                    if (error.response?.data?.errors) {
                        const serverErrors = {};
                        error.response.data.errors.forEach(err => {
                            const [field, message] = err.split(': ');
                            serverErrors[field] = message;
                        });
                        setErrors(serverErrors);
                    }
                    toast.error(error.response?.data?.message || 'Failed to add student');
                });
        }
    };
    
    return (
        <Container className="mt-4">
            <Card className="card-custom">
                <Card.Header className="bg-success text-white">
                    <h3 className="mb-0">Add New Student</h3>
                </Card.Header>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>First Name <span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="firstName"
                                        value={student.firstName}
                                        onChange={handleChange}
                                        isInvalid={!!errors.firstName}
                                        placeholder="Enter first name"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.firstName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Last Name <span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        value={student.lastName}
                                        onChange={handleChange}
                                        isInvalid={!!errors.lastName}
                                        placeholder="Enter last name"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.lastName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email <span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={student.email}
                                        onChange={handleChange}
                                        isInvalid={!!errors.email}
                                        placeholder="Enter email"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone <span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phone"
                                        value={student.phone}
                                        onChange={handleChange}
                                        isInvalid={!!errors.phone}
                                        placeholder="Enter 10-digit phone number"
                                        maxLength="10"
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.phone}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Department <span className="text-danger">*</span></Form.Label>
                                    <Form.Select
                                        name="department"
                                        value={student.department}
                                        onChange={handleChange}
                                        isInvalid={!!errors.department}
                                    >
                                        <option value="">Select Department</option>
                                        {departments.map(dept => (
                                            <option key={dept} value={dept}>{dept}</option>
                                        ))}
                                    </Form.Select>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.department}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                            
                            <Col md={6}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Date of Birth <span className="text-danger">*</span></Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="dateOfBirth"
                                        value={student.dateOfBirth}
                                        onChange={handleChange}
                                        isInvalid={!!errors.dateOfBirth}
                                        max={new Date().toISOString().split('T')[0]}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.dateOfBirth}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Gender <span className="text-danger">*</span></Form.Label>
                            <div>
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Male"
                                    name="gender"
                                    value="Male"
                                    checked={student.gender === 'Male'}
                                    onChange={handleChange}
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Female"
                                    name="gender"
                                    value="Female"
                                    checked={student.gender === 'Female'}
                                    onChange={handleChange}
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    label="Other"
                                    name="gender"
                                    value="Other"
                                    checked={student.gender === 'Other'}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.gender && (
                                <div className="error-message">{errors.gender}</div>
                            )}
                        </Form.Group>
                        
                        <div className="d-flex gap-2">
                            <Button 
                                variant="success" 
                                type="submit"
                                className="btn-custom"
                            >
                                Add Student
                            </Button>
                            <Button 
                                variant="secondary" 
                                onClick={() => navigate('/students')}
                                className="btn-custom"
                            >
                                Cancel
                            </Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default AddStudent;
