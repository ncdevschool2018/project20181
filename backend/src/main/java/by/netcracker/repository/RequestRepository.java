package by.netcracker.repository;

import by.netcracker.entities.RequestEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RequestRepository extends CrudRepository<RequestEntity,Integer> {
    List<RequestEntity> findAllByStatuspractice(String status);
}
