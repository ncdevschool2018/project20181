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

    @Autowired
    private AccountRepository accountRepository;

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
    public List<AccountEntity> findAllStudents() {
        return (List<AccountEntity>) accountRepository.findAll();
    }

    @Override
    public AccountEntity getStudentById(int id) {
        return accountRepository.findOne(id);
    }

}
