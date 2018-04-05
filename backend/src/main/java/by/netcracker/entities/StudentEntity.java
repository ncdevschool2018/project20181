package by.netcracker.entities;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "student", schema = "netcracker", catalog = "")
public class StudentEntity {
    private int id;
    private String firstname;
    private String lastname;
    private String patronymic;
    private int group;
    private double averagescore;
    private String isbudget;
    private String statuspractice;
    private String comment;
    private String phone;
    private String adress;
    private SpecialityEntity specialityEntity;

    @Id
    @Column(name = "idstudent")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @Column(name = "name")
    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    @Basic
    @Column(name = "surname")
    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    @Basic
    @Column(name = "patronymic")
    public String getPatronymic() {
        return patronymic;
    }

    public void setPatronymic(String patronymic) {
        this.patronymic = patronymic;
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
        if (!firstname.equals(that.firstname)) return false;
        if (!lastname.equals(that.lastname)) return false;
        if (!patronymic.equals(that.patronymic)) return false;
        if (!isbudget.equals(that.isbudget)) return false;
        if (!statuspractice.equals(that.statuspractice)) return false;
        if (comment != null ? !comment.equals(that.comment) : that.comment != null) return false;
        if (phone != null ? !phone.equals(that.phone) : that.phone != null) return false;
        if (adress != null ? !adress.equals(that.adress) : that.adress != null) return false;
        return specialityEntity.equals(that.specialityEntity);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstname, lastname, patronymic, group, averagescore, isbudget, statuspractice, comment, adress, phone);
    }

    @ManyToOne
    @JoinColumn(name = "specid", referencedColumnName = "idSpeciality", nullable = false)
    public SpecialityEntity getSpecialityEntity() {
        return specialityEntity;
    }

    public void setSpecialityEntity(SpecialityEntity specialityEntity) {
        this.specialityEntity = specialityEntity;
    }
}
