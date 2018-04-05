package by.netcracker.entities;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "speciality", schema = "netcracker", catalog = "")
public class SpecialityEntity {
    private int id;
    private String namespeciality;
    private FacultyEntity facultyEntity;


    @Id
    @Column(name = "idSpeciality")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name_spec")
    public String getNamespeciality() {
        return namespeciality;
    }

    public void setNamespeciality(String namespeciality) {
        this.namespeciality = namespeciality;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        SpecialityEntity that = (SpecialityEntity) o;
        return id == that.id &&
                Objects.equals(namespeciality, that.namespeciality);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, namespeciality);
    }

    @ManyToOne
    @JoinColumn(name = "faculid", referencedColumnName = "idfaculty", nullable = false)
    public FacultyEntity getFacultyEntity() {
        return facultyEntity;
    }

    public void setFacultyEntity(FacultyEntity facultyEntity) {
        this.facultyEntity = facultyEntity;
    }
}
