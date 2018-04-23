package by.netcracker.services;

import by.netcracker.entities.AccountEntity;

import java.util.List;

public interface AccountService {
     AccountEntity authorizationAccount(AccountEntity accountEntity);
     List<AccountEntity> findAllStudents();
     List<AccountEntity> getAllHeadOfPractice();
     List<AccountEntity> getAllStudents();
     AccountEntity getStudentById(int id);
}
