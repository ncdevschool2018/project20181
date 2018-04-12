package by.netcracker.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "student", schema = "netcracker", catalog = "")
public class StudentEntity {
    private int id;
    private int group;
    private double averagescore;
    private String isbudget;
    private String statuspractice;
    private String comment;
    private String phone;
    private String adress;
    private SpecialityEntity specialityEntity;
    //private Set<RequestEntity> request_companies = new HashSet<>();



    @Id
    @Column(name = "idstudent")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "group")
    public int getGroup() {
        return group;
    }

    public void setGroup(int group) {
        this.group = group;
    }

    @Basic
    @Column(name = "average_score")
    public double getAveragescore() {
        return averagescore;
    }

    public void setAveragescore(double averagescore) {
        this.averagescore = averagescore;
    }

    @Basic
    @Column(name = "budget")
    public String getIsbudget() {
        return isbudget;
    }

    public void setIsbudget(String isbudget) {
        this.isbudget = isbudget;
    }

    @Basic
    @Column(name = "status")
    public String getStatuspractice() {
        return statuspractice;
    }

    public void setStatuspractice(String statuspractice) {
        this.statuspractice = statuspractice;
    }

    @Column(name = "comment")
    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    @Basic
    @Column(name = "phone")
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Basic
    @Column(name = "adress")
    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        StudentEntity that = (StudentEntity) o;

        if (id != that.id) return false;
        if (group != that.group) return false;
        if (Double.compare(that.averagescore, averagescore) != 0) return false;
        if (isbudget != null ? !isbudget.equals(that.isbudget) : that.isbudget != null) return false;
        if (statuspractice != null ? !statuspractice.equals(that.statuspractice) : that.statuspractice != null)
            return false;
        if (comment != null ? !comment.equals(that.comment) : that.comment != null) return false;
        if (phone != null ? !phone.equals(that.phone) : that.phone != null) return false;
        if (adress != null ? !adress.equals(that.adress) : that.adress != null) return false;
        return specialityEntity != null ? specialityEntity.equals(that.specialityEntity) : that.specialityEntity == null;
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = id;
        result = 31 * result + group;
        temp = Double.doubleToLongBits(averagescore);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + (isbudget != null ? isbudget.hashCode() : 0);
        result = 31 * result + (statuspractice != null ? statuspractice.hashCode() : 0);
        result = 31 * result + (comment != null ? comment.hashCode() : 0);
        result = 31 * result + (phone != null ? phone.hashCode() : 0);
        result = 31 * result + (adress != null ? adress.hashCode() : 0);
        result = 31 * result + (specialityEntity != null ? specialityEntity.hashCode() : 0);
        return result;
    }

    /* @JsonIgnore
    @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinTable(name = "student_request", joinColumns = @JoinColumn(name = "studentrid", referencedColumnName = "idstudent"),
            inverseJoinColumns = @JoinColumn(name = "requestsid", referencedColumnName = "idrequest"))
    public Set<RequestEntity> getRequest_companies() {
        return request_companies;
    }

    public void setRequest_companies(Set<RequestEntity> request_companies) {
        this.request_companies = request_companies;
    }*/

    @ManyToOne
    @JoinColumn(name = "specid", referencedColumnName = "idSpeciality", nullable = false)
    public SpecialityEntity getSpecialityEntity() {
        return specialityEntity;
    }

    public void setSpecialityEntity(SpecialityEntity specialityEntity) {
        this.specialityEntity = specialityEntity;
    }

}
