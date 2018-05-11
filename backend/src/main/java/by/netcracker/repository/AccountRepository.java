package by.netcracker.repository;

import by.netcracker.entities.AccountEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AccountRepository extends CrudRepository<AccountEntity,Integer> {
    List<AccountEntity> findByRole(String role);
    List<AccountEntity> findByLogin(String username);

    @Query(value = "SELECT MAX(idaccounts) FROM accounts", nativeQuery = true)
    int getIdLastCreatedAccount();
}
