package by.netcracker.services;

import by.netcracker.entities.FacultyEntity;

import java.util.List;

public interface FacultyService {
    void addFaculty(FacultyEntity facultyEntity);
    List<FacultyEntity> getAllFaculties();
}
