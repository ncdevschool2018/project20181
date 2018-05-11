package by.netcracker.services;

import by.netcracker.entities.AccountEntity;

import java.util.List;

public interface AccountService {
     void addAccount(AccountEntity accountEntity);
     List<AccountEntity> findAllStudents();
     List<AccountEntity> findUserByUserName(String username);
     List<AccountEntity> getAllHeadOfPractice();
     List<AccountEntity> getAllStudents();
     AccountEntity getStudentById(int id);

     Integer getIdLastCreatedAccount();
}
