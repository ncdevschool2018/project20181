package by.netcracker.services.impl;

import by.netcracker.entities.StudentEntity;
import by.netcracker.repository.StudentRepository;
import by.netcracker.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository userRepository;

}
