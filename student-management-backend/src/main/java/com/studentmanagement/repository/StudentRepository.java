package com.studentmanagement.repository;

import com.studentmanagement.model.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    
    // Search by name (first or last name)
    @Query("SELECT s FROM Student s WHERE LOWER(s.firstName) LIKE LOWER(CONCAT('%', :name, '%')) " +
           "OR LOWER(s.lastName) LIKE LOWER(CONCAT('%', :name, '%'))")
    Page<Student> searchByName(@Param("name") String name, Pageable pageable);
    
    // Filter by department
    Page<Student> findByDepartment(String department, Pageable pageable);
    
    // Search by name and filter by department
    @Query("SELECT s FROM Student s WHERE (LOWER(s.firstName) LIKE LOWER(CONCAT('%', :name, '%')) " +
           "OR LOWER(s.lastName) LIKE LOWER(CONCAT('%', :name, '%'))) AND s.department = :department")
    Page<Student> searchByNameAndDepartment(@Param("name") String name, 
                                           @Param("department") String department, 
                                           Pageable pageable);
    
    boolean existsByEmail(String email);
}
