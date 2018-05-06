package by.netcracker.repository;

import by.netcracker.entities.StudentEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface StudentRepository extends CrudRepository<StudentEntity,Integer> {
    //List<StudentEntity> findAllByGroup(int group);
    //StudentEntity find(StudentEntity studentEntity);
    List<StudentEntity> findAllByStatuspractice(String status);

    @Query(value = "SELECT MAX(idstudents) FROM student", nativeQuery = true)
    int getIdLastCreatedStudent();
}
