package com.studentmanagement.service;

import com.studentmanagement.dto.StudentDTO;
import com.studentmanagement.exception.ResourceNotFoundException;
import com.studentmanagement.exception.ValidationException;
import com.studentmanagement.model.Student;
import com.studentmanagement.repository.StudentRepository;
import com.studentmanagement.service.StudentService;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class StudentServiceImpl implements StudentService {
    
    private final StudentRepository studentRepository;
    
    @Override
    public StudentDTO createStudent(StudentDTO studentDTO) {
        // Check if email already exists
        if (studentRepository.existsByEmail(studentDTO.getEmail())) {
            throw new ValidationException("Email already exists: " + studentDTO.getEmail());
        }
        
        Student student = mapToEntity(studentDTO);
        Student savedStudent = studentRepository.save(student);
        return mapToDTO(savedStudent);
    }
    
    @Override
    @Transactional(readOnly = true)
    public StudentDTO getStudentById(Long id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student", "id", id));
        return mapToDTO(student);
    }
    
    @Override
    @Transactional(readOnly = true)
    public Page<StudentDTO> getAllStudents(Pageable pageable) {
        Page<Student> students = studentRepository.findAll(pageable);
        return students.map(this::mapToDTO);
    }
    
    @Override
    @Transactional(readOnly = true)
    public Page<StudentDTO> searchStudents(String name, String department, Pageable pageable) {
        Page<Student> students;
        
        if (name != null && !name.isEmpty() && department != null && !department.isEmpty()) {
            students = studentRepository.searchByNameAndDepartment(name, department, pageable);
        } else if (name != null && !name.isEmpty()) {
            students = studentRepository.searchByName(name, pageable);
        } else if (department != null && !department.isEmpty()) {
            students = studentRepository.findByDepartment(department, pageable);
        } else {
            students = studentRepository.findAll(pageable);
        }
        
        return students.map(this::mapToDTO);
    }
    
    @Override
    public StudentDTO updateStudent(Long id, StudentDTO studentDTO) {
        Student existingStudent = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student", "id", id));
        
        // Check if email is being changed and if new email already exists
        if (!existingStudent.getEmail().equals(studentDTO.getEmail()) 
            && studentRepository.existsByEmail(studentDTO.getEmail())) {
            throw new ValidationException("Email already exists: " + studentDTO.getEmail());
        }
        
        existingStudent.setFirstName(studentDTO.getFirstName());
        existingStudent.setLastName(studentDTO.getLastName());
        existingStudent.setEmail(studentDTO.getEmail());
        existingStudent.setPhone(studentDTO.getPhone());
        existingStudent.setDepartment(studentDTO.getDepartment());
        existingStudent.setDateOfBirth(studentDTO.getDateOfBirth());
        existingStudent.setGender(studentDTO.getGender());
        
        Student updatedStudent = studentRepository.save(existingStudent);
        return mapToDTO(updatedStudent);
    }
    
    @Override
    public void deleteStudent(Long id) {
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Student", "id", id));
        studentRepository.delete(student);
    }
 // Mapper methods
    private StudentDTO mapToDTO(Student student) {
        return StudentDTO.builder()
                .id(student.getId())
                .firstName(student.getFirstName())
                .lastName(student.getLastName())  // ✅ Fixed here
                .email(student.getEmail())
                .phone(student.getPhone())
                .department(student.getDepartment())
                .dateOfBirth(student.getDateOfBirth())
                .gender(student.getGender())
                .build();
    }

    
    private Student mapToEntity(StudentDTO studentDTO) {
        return Student.builder()
                .firstName(studentDTO.getFirstName())
                .lastName(studentDTO.getLastName())
                .email(studentDTO.getEmail())
                .phone(studentDTO.getPhone())
                .department(studentDTO.getDepartment())
                .dateOfBirth(studentDTO.getDateOfBirth())
                .gender(studentDTO.getGender())
                .build();
    }
}
