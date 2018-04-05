package by.netcracker.repository;

import by.netcracker.entities.AccountEntity;
import org.springframework.data.repository.CrudRepository;

public interface AccountRepository extends CrudRepository<AccountEntity,Integer> {
}
