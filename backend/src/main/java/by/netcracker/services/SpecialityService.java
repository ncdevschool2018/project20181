package by.netcracker.services;

import by.netcracker.entities.SpecialityEntity;

import java.util.List;

public interface SpecialityService {
    void addSpeciality(SpecialityEntity specialityEntity);
    List<SpecialityEntity> getAllSpecialities();
    List<SpecialityEntity> getAllSpecialitiesByIdFaculty(Integer idFaculty);
}
