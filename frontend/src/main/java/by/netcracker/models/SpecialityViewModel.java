package by.netcracker.models;

import by.netcracker.entities.FacultyEntity;

public class SpecialityViewModel {
    private String idSpeciality;
    private String namespeciality;
    private FacultyViewModel facultyViewModel;

    public String getIdSpeciality() {
        return idSpeciality;
    }

    public void setIdSpeciality(String idSpeciality) {
        this.idSpeciality = idSpeciality;
    }

    public String getNamespeciality() {
        return namespeciality;
    }

    public void setNamespeciality(String namespeciality) {
        this.namespeciality = namespeciality;
    }

    public FacultyViewModel getFacultyViewModel() {
        return facultyViewModel;
    }

    public void setFacultyViewModel(FacultyViewModel facultyViewModel) {
        this.facultyViewModel = facultyViewModel;
    }
}
