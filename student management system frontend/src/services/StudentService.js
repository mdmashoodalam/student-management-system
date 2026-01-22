import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api/students';

class StudentService {
    
    // Get all students with pagination, search, and filter
    getAllStudents(page = 0, size = 10, sortBy = 'id', sortDirection = 'asc', name = '', department = '') {
        let url = `${BASE_URL}?page=${page}&size=${size}&sortBy=${sortBy}&sortDirection=${sortDirection}`;
        
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
        return axios.get(`${BASE_URL}/${id}`);
    }
    
    // Create new student
    createStudent(student) {
        return axios.post(BASE_URL, student);
    }
    
    // Update student
    updateStudent(id, student) {
        return axios.put(`${BASE_URL}/${id}`, student);
    }
    
    // Delete student
    deleteStudent(id) {
        return axios.delete(`${BASE_URL}/${id}`);
    }
}

export default new StudentService();
