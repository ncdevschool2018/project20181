package by.netcracker.services.impl;

import by.netcracker.entities.AccountEntity;
import by.netcracker.repository.AccountRepository;
import by.netcracker.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Transactional
@Service
public class AccountServiceImpl implements AccountService {

    private AccountRepository accountRepository;
    private static final String USER_ROLE_STUDENT = "ROLE-STUDENT";
    private static final String USER_ROLE_HEAD = "ROLE-HEAD";

    @Autowired
    public void setAccountRepository(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }


    @Override
    public void addAccount(AccountEntity accountEntity) {
        this.accountRepository.save(accountEntity);
    }

    @Override
    public List<AccountEntity> findAllStudents() {
        return this.accountRepository.findByRole(USER_ROLE_STUDENT);
    }

    @Override
    public List<AccountEntity> findUserByUserName(String username) {
        return this.accountRepository.findByLogin(username);
    }

    @Override
    public List<AccountEntity> getAllHeadOfPractice() {
        return this.accountRepository.findByRole(USER_ROLE_HEAD);
    }

    @Override
    public List<AccountEntity> getAllStudents() {
        List<AccountEntity> accountEntities = this.accountRepository.findByRole(USER_ROLE_STUDENT);
        List<AccountEntity> accountEntitiesWhereSizeStudent = new ArrayList<>();
        for(AccountEntity account : accountEntities)
            if (account.getStudentsById().size() == 0)
                accountEntitiesWhereSizeStudent.add(account);
        return accountEntitiesWhereSizeStudent;
    }

    @Override
    public AccountEntity getStudentById(int id) {
        return this.accountRepository.findOne(id);
    }

    @Override
    public Integer getIdLastCreatedAccount() {
        return this.accountRepository.getIdLastCreatedAccount();
    }

}
