package by.netcracker.services.impl;

import by.netcracker.entities.StudentEntity;
import by.netcracker.repository.StudentRepository;
import by.netcracker.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.rmi.CORBA.StubDelegate;
import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class StudentServiceImpl implements StudentService {

    private StudentRepository studentRepository;

    @Autowired
    public void setStudentRepository(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public List<StudentEntity> findAllStudents() {
        return (List<StudentEntity>) this.studentRepository.findAll();
    }
}
