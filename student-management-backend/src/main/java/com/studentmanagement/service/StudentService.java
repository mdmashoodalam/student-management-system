package com.studentmanagement.service;

import com.studentmanagement.dto.StudentDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface StudentService {
    
    StudentDTO createStudent(StudentDTO studentDTO);
    
    StudentDTO getStudentById(Long id);
    
    Page<StudentDTO> getAllStudents(Pageable pageable);
    
    Page<StudentDTO> searchStudents(String name, String department, Pageable pageable);
    
    StudentDTO updateStudent(Long id, StudentDTO studentDTO);
    
    void deleteStudent(Long id);
}
