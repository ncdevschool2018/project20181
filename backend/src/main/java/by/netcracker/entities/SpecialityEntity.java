package by.netcracker.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Collection;
import java.util.Objects;

@Entity
@Table(name = "speciality", schema = "netcracker", catalog = "")
public class SpecialityEntity {
    private int id;
    private String namespeciality;
    private Integer facultyId;
    private FacultyEntity facultyByFaculty;
    private Collection<RequestEntity> practicesById;
    private Collection<StudentEntity> studentsById;


    @Id
    @Column(name = "idSpeciality")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @NotEmpty(message="Faculty cannot be empty")
    @Size(min=1,max=3,message="Size should be between 1 to 8")
    @Column(name = "name_spec", nullable = false)
    public String getNamespeciality() {
        return namespeciality;
    }

    public void setNamespeciality(String namespeciality) {
        this.namespeciality = namespeciality;
    }

    @Column(name = "faculid")
    public Integer getFacultyId() {
        return facultyId;
    }

    public void setFacultyId(Integer facultyId) {
        this.facultyId = facultyId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        SpecialityEntity that = (SpecialityEntity) o;

        if (id != that.id) return false;
        if (namespeciality != null ? !namespeciality.equals(that.namespeciality) : that.namespeciality != null)
            return false;
        return facultyId != null ? facultyId.equals(that.facultyId) : that.facultyId == null;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (namespeciality != null ? namespeciality.hashCode() : 0);
        result = 31 * result + (facultyId != null ? facultyId.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "faculid", referencedColumnName = "idfaculty", nullable = false, insertable = false, updatable = false)
    public FacultyEntity getFacultyByFaculty() {
        return facultyByFaculty;
    }

    public void setFacultyByFaculty(FacultyEntity facultyByFaculty) {
        this.facultyByFaculty = facultyByFaculty;
    }

    @OneToMany(mappedBy = "specialityEntity")
    public Collection<RequestEntity> getPracticesById() {
        return practicesById;
    }

    public void setPracticesById(Collection<RequestEntity> practicesById) {
        this.practicesById = practicesById;
    }

    @OneToMany(mappedBy = "specialityEntityByStudent")
    public Collection<StudentEntity> getStudentsById() {
        return studentsById;
    }

    public void setStudentsById(Collection<StudentEntity> studentsById) {
        this.studentsById = studentsById;
    }
}