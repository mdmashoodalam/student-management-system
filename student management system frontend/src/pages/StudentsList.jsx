import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Table, Button, Card, Spinner, Form, Row, Col } from 'react-bootstrap';
import { toast } from 'react-toastify';
import StudentService from '../services/StudentService';

const StudentsList = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [pageSize, setPageSize] = useState(10);
    const [searchName, setSearchName] = useState('');
    const [filterDepartment, setFilterDepartment] = useState('');
    const [sortBy, setSortBy] = useState('id');
    const [sortDirection, setSortDirection] = useState('asc');
    
    const departments = ['Computer Science', 'Electronics', 'Mechanical', 'Civil', 'Electrical', 'IT'];
    
    useEffect(() => {
        loadStudents();
    }, [currentPage, pageSize, sortBy, sortDirection]);
    
    const loadStudents = () => {
        setLoading(true);
        StudentService.getAllStudents(currentPage, pageSize, sortBy, sortDirection, searchName, filterDepartment)
            .then(response => {
                setStudents(response.data.content);
                setTotalPages(response.data.totalPages);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading students:', error);
                toast.error('Failed to load students');
                setLoading(false);
            });
    };
    
    const handleSearch = () => {
        setCurrentPage(0);
        loadStudents();
    };
    
    const handleReset = () => {
        setSearchName('');
        setFilterDepartment('');
        setCurrentPage(0);
        setSortBy('id');
        setSortDirection('asc');
    };
    
    const deleteStudent = (id) => {
        if (window.confirm('Are you sure you want to delete this student?')) {
            StudentService.deleteStudent(id)
                .then(() => {
                    toast.success('Student deleted successfully');
                    loadStudents();
                })
                .catch(error => {
                    console.error('Error deleting student:', error);
                    toast.error(error.response?.data?.message || 'Failed to delete student');
                });
        }
    };
    
    const handleSort = (field) => {
        if (sortBy === field) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortBy(field);
            setSortDirection('asc');
        }
    };
    
    return (
        <Container className="mt-4">
            <Card className="card-custom">
                <Card.Header className="bg-primary text-white">
                    <h3 className="mb-0">Students List</h3>
                </Card.Header>
                <Card.Body>
                    {/* Search and Filter Section */}
                    <div className="search-filter-section">
                        <Row className="mb-3">
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Search by Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter first or last name"
                                        value={searchName}
                                        onChange={(e) => setSearchName(e.target.value)}
                                        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                                    />
                                </Form.Group>
                            </Col>
                            <Col md={4}>
                                <Form.Group>
                                    <Form.Label>Filter by Department</Form.Label>
                                    <Form.Select
                                        value={filterDepartment}
                                        onChange={(e) => setFilterDepartment(e.target.value)}
                                    >
                                        <option value="">All Departments</option>
                                        {departments.map(dept => (
                                            <option key={dept} value={dept}>{dept}</option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col md={4} className="d-flex align-items-end">
                                <Button 
                                    variant="primary" 
                                    onClick={handleSearch}
                                    className="me-2 btn-custom"
                                >
                                    Search
                                </Button>
                                <Button 
                                    variant="secondary" 
                                    onClick={handleReset}
                                    className="btn-custom"
                                >
                                    Reset
                                </Button>
                            </Col>
                        </Row>
                        
                        <Row>
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Items per page</Form.Label>
                                    <Form.Select
                                        value={pageSize}
                                        onChange={(e) => {
                                            setPageSize(Number(e.target.value));
                                            setCurrentPage(0);
                                        }}
                                        style={{ width: '120px' }}
                                    >
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="50">50</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </div>
                    
                    {loading ? (
                        <div className="text-center my-5">
                            <Spinner animation="border" variant="primary" />
                            <p className="mt-3">Loading students...</p>
                        </div>
                    ) : students.length === 0 ? (
                        <div className="text-center my-5">
                            <h5>No students found</h5>
                            <p>Try adjusting your search or filter criteria</p>
                        </div>
                    ) : (
                        <>
                            <div className="table-responsive">
                                <Table striped bordered hover>
                                    <thead className="bg-light">
                                        <tr>
                                            <th onClick={() => handleSort('id')} style={{ cursor: 'pointer' }}>
                                                ID {sortBy === 'id' && (sortDirection === 'asc' ? '↑' : '↓')}
                                            </th>
                                            <th onClick={() => handleSort('firstName')} style={{ cursor: 'pointer' }}>
                                                First Name {sortBy === 'firstName' && (sortDirection === 'asc' ? '↑' : '↓')}
                                            </th>
                                            <th onClick={() => handleSort('lastName')} style={{ cursor: 'pointer' }}>
                                                Last Name {sortBy === 'lastName' && (sortDirection === 'asc' ? '↑' : '↓')}
                                            </th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th onClick={() => handleSort('department')} style={{ cursor: 'pointer' }}>
                                                Department {sortBy === 'department' && (sortDirection === 'asc' ? '↑' : '↓')}
                                            </th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students.map(student => (
                                            <tr key={student.id}>
                                                <td>{student.id}</td>
                                                <td>{student.firstName}</td>
                                                <td>{student.lastName}</td>
                                                <td>{student.email}</td>
                                                <td>{student.phone}</td>
                                                <td>{student.department}</td>
                                                <td>
                                                    <div className="action-buttons">
                                                        <Button
                                                            as={Link}
                                                            to={`/view-student/${student.id}`}
                                                            variant="info"
                                                            size="sm"
                                                            className="btn-custom"
                                                        >
                                                            View
                                                        </Button>
                                                        <Button
                                                            as={Link}
                                                            to={`/edit-student/${student.id}`}
                                                            variant="warning"
                                                            size="sm"
                                                            className="btn-custom"
                                                        >
                                                            Edit
                                                        </Button>
                                                        <Button
                                                            variant="danger"
                                                            size="sm"
                                                            onClick={() => deleteStudent(student.id)}
                                                            className="btn-custom"
                                                        >
                                                            Delete
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </div>
                            
                            {/* Pagination */}
                            <div className="pagination-custom">
                                <Button
                                    variant="primary"
                                    disabled={currentPage === 0}
                                    onClick={() => setCurrentPage(currentPage - 1)}
                                    className="btn-custom"
                                >
                                    Previous
                                </Button>
                                <span className="mx-3">
                                    Page {currentPage + 1} of {totalPages}
                                </span>
                                <Button
                                    variant="primary"
                                    disabled={currentPage === totalPages - 1}
                                    onClick={() => setCurrentPage(currentPage + 1)}
                                    className="btn-custom"
                                >
                                    Next
                                </Button>
                            </div>
                        </>
                    )}
                </Card.Body>
            </Card>
        </Container>
    );
};

export default StudentsList;
