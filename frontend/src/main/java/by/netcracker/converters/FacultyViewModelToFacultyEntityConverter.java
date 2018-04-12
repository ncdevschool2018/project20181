package by.netcracker.converters;

import by.netcracker.entities.FacultyEntity;
import by.netcracker.models.FacultyViewModel;
import org.springframework.core.convert.converter.Converter;

public class FacultyViewModelToFacultyEntityConverter implements Converter<FacultyViewModel, FacultyEntity> {

    @Override
    public FacultyEntity convert(FacultyViewModel facultyViewModel) {

        FacultyEntity facultyEntity = new FacultyEntity();
        facultyEntity.setNamefaculty(facultyViewModel.getNamefaculty());
        return facultyEntity;
    }
}
