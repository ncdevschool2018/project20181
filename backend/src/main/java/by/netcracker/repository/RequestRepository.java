package by.netcracker.repository;

import by.netcracker.entities.RequestEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RequestRepository extends CrudRepository<RequestEntity,Integer> {
    List<RequestEntity> findAllByStatuspractice(String status);

    @Query(value = "SELECT * FROM request WHERE request.date_practice_first < curdate()", nativeQuery = true)
    List<RequestEntity> requestEntitiesAfterCurentDate();
}
