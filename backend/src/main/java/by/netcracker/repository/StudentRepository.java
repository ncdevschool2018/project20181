package by.netcracker.repository;

import by.netcracker.entities.StudentEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface StudentRepository extends CrudRepository<StudentEntity,Integer> {
    List<StudentEntity> findAllByStatuspractice(String status);
    //List<StudentEntity> findAllBy
    StudentEntity findByAccountId(Integer id);


    @Query(value = "SELECT MAX(idstudents) FROM student", nativeQuery = true)
    int getIdLastCreatedStudent();
}
