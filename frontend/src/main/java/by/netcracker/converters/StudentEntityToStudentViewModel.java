package by.netcracker.converters;

import by.netcracker.entities.AccountEntity;
import by.netcracker.entities.FacultyEntity;
import by.netcracker.entities.SpecialityEntity;
import by.netcracker.entities.StudentEntity;
import by.netcracker.models.StudentViewModel;
import org.springframework.core.convert.converter.Converter;

public class StudentEntityToStudentViewModel implements Converter<StudentEntity, StudentViewModel> {
    @Override
    public StudentViewModel convert(StudentEntity studentEntity) {
        StudentViewModel studentViewModel = new StudentViewModel();
        studentViewModel.setIdStudent(String.valueOf(studentEntity.getId()));
        studentViewModel.setGroup(String.valueOf(studentEntity.getGroup()));
        studentViewModel.setAveragescore(String.valueOf(studentEntity.getAveragescore()));
        studentViewModel.setIsbudget(studentEntity.getIsbudget());
        studentViewModel.setStatuspractice(studentEntity.getStatuspractice());
        studentViewModel.setComment(studentEntity.getComment());
        studentViewModel.setPhone(studentEntity.getPhone());
        studentViewModel.setAdress(studentEntity.getAdress());

        AccountEntity accountEntity = studentEntity.getAccountEntityByStudent();
        if(accountEntity != null){
            studentViewModel.setAccountId(String.valueOf(accountEntity.getId()));
            studentViewModel.setFirstname(accountEntity.getFirstname());
            studentViewModel.setLastname(accountEntity.getLastname());
            studentViewModel.setPatronymic(accountEntity.getPatronymic());

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
    }
}
