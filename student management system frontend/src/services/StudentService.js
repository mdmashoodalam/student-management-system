import axios from 'axios';

// Use environment variable for API URL, fallback to Railway production URL
const API_BASE_URL = process.env.REACT_APP_API_URL || 'https://student-management-system-production-98eb.up.railway.app';

class StudentService {
    
    // Get all students with pagination, search, and filter
    getAllStudents(page = 0, size = 10, sortBy = 'id', sortDirection = 'asc', name = '', department = '') {
        let url = `${API_BASE_URL}/api/students?page=${page}&size=${size}&sortBy=${sortBy}&sortDirection=${sortDirection}`;
        
        if (name) {
            url += `&name=${name}`;
        }
        if (department) {
            url += `&department=${department}`;
        }
        
        return axios.get(url);
    }
    
    // Get student by ID
    getStudentById(id) {
        return axios.get(`${API_BASE_URL}/api/students/${id}`);
    }
    
    // Create new student
    createStudent(student) {
        return axios.post(`${API_BASE_URL}/api/students`, student);
    }
    
    // Update student
    updateStudent(id, student) {
        return axios.put(`${API_BASE_URL}/api/students/${id}`, student);
    }
    
    // Delete student
    deleteStudent(id) {
        return axios.delete(`${API_BASE_URL}/api/students/${id}`);
    }
}

const studentServiceInstance = new StudentService();
export default studentServiceInstance;
