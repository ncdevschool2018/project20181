package by.netcracker.entities;


import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "student", schema = "netcracker", catalog = "")
public class StudentEntity {
    private int idStudent;
    private int groupStudent;
    private double averagescore;
    private String isbudget;
    private String comment;
    private String phone;
    private String adress;
    private String statuspractice;
    private Integer specialityId;
    private Integer accountId;
    private AccountEntity accountEntityByStudent;
    private SpecialityEntity specialityEntityByStudent;
    private Set<RequestEntity> request_companies = new HashSet<>();
   // private AccountEntity accountEntity;//for oneToone


    @Id
    @Column(name = "idstudents")
    public int getIdStudent() {
        return idStudent;
    }

    public void setIdStudent(int idStudent) {
        this.idStudent = idStudent;
    }

    @Basic
    @Column(name = "group_student")
    public int getGroupStudent() {
        return groupStudent;
    }

    public void setGroupStudent(int groupStudent) {
        this.groupStudent = groupStudent;
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
    @Column(name = "isbudget")
    public String getIsbudget() {
        return isbudget;
    }

    public void setIsbudget(String isbudget) {
        this.isbudget = isbudget;
    }

    @Basic
    @Column(name = "status_student")
    public String getStatuspractice() {
        return statuspractice;
    }

    public void setStatuspractice(String statuspractice) {
        this.statuspractice = statuspractice;
    }

    @Basic
    @Column(name = "phone_student")
    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    @Basic
    @Column(name = "adress_student")
    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    @Column(name = "comment_student")
    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    @Basic
    @Column(name = "spec_id")
    public Integer getSpecialityId() {
        return specialityId;
    }

    public void setSpecialityId(Integer specialityId) {
        this.specialityId = specialityId;
    }

    @Basic
    @Column(name = "accountstud_id")
    public Integer getAccountId() {
        return accountId;
    }

    public void setAccountId(Integer accountId) {
        this.accountId = accountId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        StudentEntity that = (StudentEntity) o;

        if (idStudent != that.idStudent) return false;
        if (groupStudent != that.groupStudent) return false;
        if (Double.compare(that.averagescore, averagescore) != 0) return false;
        if (isbudget != null ? !isbudget.equals(that.isbudget) : that.isbudget != null) return false;
        if (comment != null ? !comment.equals(that.comment) : that.comment != null) return false;
        if (phone != null ? !phone.equals(that.phone) : that.phone != null) return false;
        if (adress != null ? !adress.equals(that.adress) : that.adress != null) return false;
        if (statuspractice != null ? !statuspractice.equals(that.statuspractice) : that.statuspractice != null)
            return false;
        if (specialityId != null ? !specialityId.equals(that.specialityId) : that.specialityId != null) return false;
        return accountId != null ? accountId.equals(that.accountId) : that.accountId == null;
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = idStudent;
        result = 31 * result + groupStudent;
        temp = Double.doubleToLongBits(averagescore);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + (isbudget != null ? isbudget.hashCode() : 0);
        result = 31 * result + (comment != null ? comment.hashCode() : 0);
        result = 31 * result + (phone != null ? phone.hashCode() : 0);
        result = 31 * result + (adress != null ? adress.hashCode() : 0);
        result = 31 * result + (statuspractice != null ? statuspractice.hashCode() : 0);
        result = 31 * result + (specialityId != null ? specialityId.hashCode() : 0);
        result = 31 * result + (accountId != null ? accountId.hashCode() : 0);
        return result;
    }

/* @OneToOne(mappedBy = "studentEntity", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    public AccountEntity getAccountEntity() {
        return accountEntity;
    }

    public void setAccountEntity(AccountEntity accountEntity) {
        this.accountEntity = accountEntity;
    }*/

    @ManyToOne
    @JoinColumn(name = "accountstud_id", referencedColumnName = "idaccounts",nullable = false, insertable = false, updatable = false)
    public AccountEntity getAccountEntityByStudent() {
        return accountEntityByStudent;
    }

    public void setAccountEntityByStudent(AccountEntity accountEntityByStudent) {
        this.accountEntityByStudent = accountEntityByStudent;
    }

    @ManyToOne
    @JoinColumn(name = "spec_id", referencedColumnName = "idSpeciality",nullable = false, insertable = false, updatable = false)
    public SpecialityEntity getSpecialityEntityByStudent() {
        return specialityEntityByStudent;
    }

    public void setSpecialityEntityByStudent(SpecialityEntity specialityEntityByStudent ) {
        this.specialityEntityByStudent = specialityEntityByStudent;
    }

    @ManyToMany(fetch = FetchType.EAGER, cascade = {CascadeType.PERSIST, CascadeType.REFRESH, CascadeType.DETACH})
    @JoinTable(name = "student_request", joinColumns = {@JoinColumn(name = "studentrid")},
            inverseJoinColumns = {@JoinColumn(name = "requestsid")})
    public Set<RequestEntity> getRequest_companies() {
        return request_companies;
    }

    public void setRequest_companies(Set<RequestEntity> request_companies) {
        this.request_companies = request_companies;
    }

}
