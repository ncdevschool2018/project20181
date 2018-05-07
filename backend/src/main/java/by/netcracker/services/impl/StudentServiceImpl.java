package by.netcracker.services.impl;

import by.netcracker.entities.StudentEntity;
import by.netcracker.repository.StudentPaginationRepository;
import by.netcracker.repository.StudentRepository;
import by.netcracker.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.rmi.CORBA.StubDelegate;
import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class StudentServiceImpl implements StudentService {

    private StudentRepository studentRepository;
    @Autowired
    private StudentPaginationRepository studentPaginationRepository;
    @Autowired
    public void setStudentRepository(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @Override
    public List<StudentEntity> findAllStudents() {
        return (List<StudentEntity>) this.studentRepository.findAll();
    }

    @Override
    public List<StudentEntity> findAllStudentsByAvailable() {
        return this.studentRepository.findAllByStatuspractice("Available");
    }

    @Override
    public StudentEntity findOneStudent(Integer idStudent) {
        return this.studentRepository.findOne(idStudent);
    }

    @Override
    public Integer getIdLastCreatedStudent() {
        return this.studentRepository.getIdLastCreatedStudent();
    }


    @Override
    public void addStudent(StudentEntity studentEntity) {
        this.studentRepository.save(studentEntity);
    }

    @Override
    public void deleteStudentList(List<StudentEntity> studentEntities) {
       this.studentRepository.delete(studentEntities);
    }

    @Override
    public void deleteStudentById(Integer idStudent) {
        this.studentRepository.delete(idStudent);
    }

    @Override
    public List<StudentEntity> getPaginationAndSortedPageList(String sort, String order, Integer offset, Integer limit) {
        int pageNumber = offset / limit;

        String properties = null;
        switch (sort) {
            case "firstname":
                properties = "accountEntityByStudent.firstname";
                break;
            case "lastname":
                properties = "accountEntityByStudent.lastname";
                break;
            case "patronymic":
                properties = "accountEntityByStudent.patronymic";
                break;
            case "namespeciality":
                properties = "specialityEntityByStudent.specialityName";
                break;
            case "namefaculty":
                properties = "specialityEntityByStudent.facultyByFaculty.facultyName";
                break;
            case "groupStudent":
                properties = "groupStudent";
                break;
            case "isbudget":
                properties = "isbudget";
                break;
            case "averagescore":
                properties = "averagescore";
                break;
            case "statuspractice":
                properties = "statuspractice";
                break;
        }

        PageRequest pageRequest = new PageRequest(pageNumber, limit, Sort.Direction.fromString(order), properties);
        return studentPaginationRepository.findAll(pageRequest).getContent();
    }
}
