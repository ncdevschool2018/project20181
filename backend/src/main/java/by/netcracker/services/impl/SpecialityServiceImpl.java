package by.netcracker.services.impl;

import by.netcracker.entities.SpecialityEntity;
import by.netcracker.repository.SpecialityRepository;
import by.netcracker.services.SpecialityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class SpecialityServiceImpl implements SpecialityService {

    private SpecialityRepository specialityRepository;

    @Autowired
    public void setSpecialityRepository(SpecialityRepository specialityRepository) {
        this.specialityRepository = specialityRepository;
    }

    @Override
    public void addSpeciality(SpecialityEntity specialityEntity) {
        this.specialityRepository.save(specialityEntity);
    }

    @Override
    public List<SpecialityEntity> getAllSpecialities() {
        return (List<SpecialityEntity>) this.specialityRepository.findAll();
    }
    @Override
    public List<SpecialityEntity> getAllSpecialitiesByIdFaculty(Integer idFaculty) {
        return this.specialityRepository.findAllByFacultyId(idFaculty);
    }
}
