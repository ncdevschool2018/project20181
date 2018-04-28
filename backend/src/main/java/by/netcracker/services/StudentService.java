package by.netcracker.services;

import by.netcracker.entities.StudentEntity;

import java.util.List;

public interface StudentService {
    List<StudentEntity> findAllStudents();
    StudentEntity findOneStudentForEdit(Integer idStudent);
    void addStudent(StudentEntity studentEntity);
    void deleteStudentList(List<StudentEntity> studentEntities);
}
