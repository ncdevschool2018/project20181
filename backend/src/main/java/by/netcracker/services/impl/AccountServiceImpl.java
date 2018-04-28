package by.netcracker.services.impl;

import by.netcracker.entities.AccountEntity;
import by.netcracker.repository.AccountRepository;
import by.netcracker.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Transactional
@Service
public class AccountServiceImpl implements AccountService {

    private AccountRepository accountRepository;
    private static final String USER_ROLE_STUDENT = "student";
    private static final String USER_ROLE_HEAD = "head";

    @Autowired
    public void setAccountRepository(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Override
    public AccountEntity authorizationAccount(AccountEntity accountEntity){
        List<AccountEntity> listaccounts = (List<AccountEntity>) this.accountRepository.findAll();
            for(AccountEntity ac: listaccounts) {
                if (ac.getEmail().equals(accountEntity.getEmail())) {
                    if (ac.getPassword().equals(accountEntity.getPassword())) {
                        this.accountRepository.save(ac);
                        return ac;
                    }
                }
            }

        accountEntity.setRole("error");
        return accountEntity;
    }

    @Override
    public void addHeadOfPractice(AccountEntity accountEntityByHeadOfPractice) {
        accountEntityByHeadOfPractice.setRole(USER_ROLE_HEAD);
        this.accountRepository.save(accountEntityByHeadOfPractice);
    }

    @Override
    public List<AccountEntity> findAllStudents() {
        return this.accountRepository.findByRole(USER_ROLE_STUDENT);
    }

    @Override
    public List<AccountEntity> getAllHeadOfPractice() {
        return this.accountRepository.findByRole(USER_ROLE_HEAD);
    }

    @Override
    public List<AccountEntity> getAllStudents() {
        return this.accountRepository.findByRole(USER_ROLE_STUDENT);
    }

    @Override
    public AccountEntity getStudentById(int id) {
        return this.accountRepository.findOne(id);
    }

}
