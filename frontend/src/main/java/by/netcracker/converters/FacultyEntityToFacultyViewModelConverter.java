package by.netcracker.converters;

import by.netcracker.entities.FacultyEntity;
import by.netcracker.models.FacultyViewModel;
import org.springframework.core.convert.converter.Converter;

public class FacultyEntityToFacultyViewModelConverter implements Converter<FacultyEntity, FacultyViewModel> {


    @Override
    public FacultyViewModel convert(FacultyEntity facultyEntity) {
        FacultyViewModel facultyViewModel = new FacultyViewModel();
        facultyViewModel.setIdFaculty(String.valueOf(facultyEntity.getId()));
        facultyViewModel.setNamefaculty(facultyEntity.getNamefaculty());
        return null;
    }
}
