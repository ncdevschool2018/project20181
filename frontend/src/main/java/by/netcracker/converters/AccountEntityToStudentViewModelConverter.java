package by.netcracker.converters;

import by.netcracker.entities.AccountEntity;
import by.netcracker.entities.FacultyEntity;
import by.netcracker.entities.SpecialityEntity;
import by.netcracker.entities.StudentEntity;
import by.netcracker.models.AccountViewModel;
import by.netcracker.models.StudentViewModel;
import org.springframework.core.convert.converter.Converter;



public class AccountEntityToStudentViewModelConverter  {


    /*public AccountViewModel convert(AccountEntity accountEntity) {

        StudentViewModel studentViewModel = new StudentViewModel();
        studentViewModel.setAccountId(String.valueOf(accountEntity.getId()));
        studentViewModel.setLogin(accountEntity.getLogin());
        studentViewModel.setRole(accountEntity.getRole());
        studentViewModel.setFirstname(accountEntity.getFirstname());
        studentViewModel.setLastname(accountEntity.getLastname());
        studentViewModel.setPatronymic(accountEntity.getPatronymic());

        StudentEntity studentEntity = accountEntity.getStudentEntity();
        if(studentEntity != null){
            studentViewModel.setIdStudent(String.valueOf(studentEntity.getId()));
            studentViewModel.setGroup(String.valueOf(studentEntity.getGroup()));
            studentViewModel.setAveragescore(String.valueOf(studentEntity.getAveragescore()));
            studentViewModel.setIsbudget(studentEntity.getIsbudget());
            studentViewModel.setStatuspractice(studentEntity.getStatuspractice());
            studentViewModel.setAdress(studentEntity.getAdress());
            studentViewModel.setPhone(studentEntity.getPhone());
            studentViewModel.setComment(studentEntity.getComment());

            SpecialityEntity specialityEntity = studentEntity.getSpecialityEntity();
            if(specialityEntity != null){
                studentViewModel.setSpecialityId(String.valueOf(specialityEntity.getId()));
                studentViewModel.setSpecialityName(specialityEntity.getNamespeciality());

                FacultyEntity facultyEntity = specialityEntity.getFacultyByFaculty();
                if(facultyEntity != null){
                    studentViewModel.setFacultyId(String.valueOf(facultyEntity.getId()));
                    studentViewModel.setFacultyName(facultyEntity.getNamefaculty());
                }
            }

        }

        return studentViewModel;
    }*/
}
