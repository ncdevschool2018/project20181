package by.netcracker.services;

import by.netcracker.entities.StudentEntity;

import java.util.List;

public interface StudentService {
    List<StudentEntity> findAllStudents();
    List<StudentEntity> findAllStudentsByAvailable();
    StudentEntity findOneStudent(Integer idStudent);
    StudentEntity findOneStudentByAccountId(Integer idAccount);
    Integer getIdLastCreatedStudent();
    void addStudent(StudentEntity studentEntity);
    void deleteStudentList(List<StudentEntity> studentEntities);
    void deleteStudentById(Integer idStudent);

    List<StudentEntity> getPaginationAndSortedPageList(String sort, String order, Integer offset, Integer limit);
}
