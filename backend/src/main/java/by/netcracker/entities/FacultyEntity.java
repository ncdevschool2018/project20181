package by.netcracker.entities;

import javax.persistence.*;

@Entity
@Table(name = "faculty", schema = "netcracker", catalog = "")
public class FacultyEntity {
    private int id;
    private String namefaculty;

    @Id
    @Column(name = "idfaculty")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name_faculty")
    public String getNamefaculty() {
        return namefaculty;
    }

    public void setNamefaculty(String namefaculty) {
        this.namefaculty = namefaculty;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        FacultyEntity that = (FacultyEntity) o;

        if (id != that.id) return false;
        return namefaculty != null ? namefaculty.equals(that.namefaculty) : that.namefaculty == null;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (namefaculty != null ? namefaculty.hashCode() : 0);
        return result;
    }
}
