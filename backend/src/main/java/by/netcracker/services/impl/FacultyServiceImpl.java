package by.netcracker.services.impl;

import by.netcracker.entities.FacultyEntity;
import by.netcracker.repository.FacultyRepositoty;
import by.netcracker.services.FacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class FacultyServiceImpl implements FacultyService {

    private FacultyRepositoty facultyRepositoty;

    @Autowired
    public void setFacultyRepositoty(FacultyRepositoty facultyRepositoty) {
        this.facultyRepositoty = facultyRepositoty;
    }

    @Override
    public void addFaculty(FacultyEntity facultyEntity) {
        this.facultyRepositoty.save(facultyEntity);
    }

    @Override
    public List<FacultyEntity> getAllFaculties() {
        return (List<FacultyEntity>) this.facultyRepositoty.findAll();
    }
}
