package by.netcracker.repository;

import by.netcracker.entities.AccountEntity;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AccountRepository extends CrudRepository<AccountEntity,Integer> {
    List<AccountEntity> findByRole(String role);
}
