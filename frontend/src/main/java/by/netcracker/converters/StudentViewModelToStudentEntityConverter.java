package by.netcracker.converters;

import by.netcracker.entities.StudentEntity;
import by.netcracker.models.StudentViewModel;
import org.springframework.core.convert.converter.Converter;

public class StudentViewModelToStudentEntityConverter implements Converter<StudentViewModel, StudentEntity> {
    @Override
    public StudentEntity convert(StudentViewModel studentViewModel) {
        StudentEntity studentEntity = new StudentEntity();
        studentEntity.setIdStudent(Integer.parseInt(studentViewModel.getIdStudent()));
        studentEntity.setGroupStudent(Integer.parseInt(studentViewModel.getGroupStudent()));
        studentEntity.setAveragescore(Double.parseDouble(studentViewModel.getAveragescore()));
        studentEntity.setIsbudget(studentViewModel.getIsbudget());
        studentEntity.setStatuspractice(studentViewModel.getStatuspractice());
        studentEntity.setComment(studentViewModel.getComment());
        studentEntity.setPhone(studentViewModel.getPhone());
        studentEntity.setAdress(studentViewModel.getAdress());
        studentEntity.setAccountId(Integer.valueOf(studentViewModel.getAccountId()));
        studentEntity.setSpecialityId(Integer.valueOf(studentViewModel.getSpecialityId()));

        return studentEntity;
    }
}
