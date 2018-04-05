package by.netcracker.entities;

import javax.persistence.*;

@Entity
@Table(name = "student_request", schema = "test_base", catalog = "")
public class RequestStudentEntity {
    private int id;
    private StudentEntity studentEntity;
    private RequestEntity requestEntity;

    @Id
    @Column(name = "idstudent_request")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        RequestStudentEntity that = (RequestStudentEntity) o;

        if (id != that.id) return false;
        if (studentEntity != null ? !studentEntity.equals(that.studentEntity) : that.studentEntity != null)
            return false;
        return requestEntity != null ? requestEntity.equals(that.requestEntity) : that.requestEntity == null;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (studentEntity != null ? studentEntity.hashCode() : 0);
        result = 31 * result + (requestEntity != null ? requestEntity.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "studentrid", referencedColumnName = "idstudent", nullable = false)
    public StudentEntity getStudentEntity() {
        return studentEntity;
    }

    public void setStudentEntity(StudentEntity studentEntity) {
        this.studentEntity = studentEntity;
    }

    @ManyToOne
    @JoinColumn(name = "requestsid", referencedColumnName = "idrequest", nullable = false)
    public RequestEntity getRequestEntity() {
        return requestEntity;
    }

    public void setRequestEntity(RequestEntity requestEntity) {
        this.requestEntity = requestEntity;
    }
}
