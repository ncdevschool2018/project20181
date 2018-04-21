package by.netcracker.models;

import by.netcracker.entities.FacultyEntity;

public class SpecialityViewModel {
    private String idSpeciality;
    private String namespeciality;
    private int facultyId;

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

    public int getFacultyId() {
        return facultyId;
    }

    public void setFacultyId(int facultyId) {
        this.facultyId = facultyId;
    }
}
