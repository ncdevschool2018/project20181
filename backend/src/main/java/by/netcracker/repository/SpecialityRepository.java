package by.netcracker.repository;

import by.netcracker.entities.SpecialityEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface SpecialityRepository extends CrudRepository<SpecialityEntity,Integer> {
    List<SpecialityEntity> findAllByFacultyId(Integer id);
}
