package by.netcracker.repository;

import by.netcracker.entities.StudentEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface StudentPaginationRepository extends PagingAndSortingRepository<StudentEntity, Integer> {
}
