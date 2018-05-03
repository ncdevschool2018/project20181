package by.netcracker.entities;


import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
@Table(name = "request", schema = "netcracker", catalog = "")
public class RequestEntity {
    private int idRequest;
    private String namecompany;
    private String datefrom;
    private String dateto;
    private double minaverage;
    private int totalquantity;
    private String statuspractice;
    private Integer specialityId;
    private Integer headOfPracticeId;
    private SpecialityEntity specialityEntity;
    private AccountEntity accountEntity;
    private Set<StudentEntity> students = new HashSet<>();

    @Id
    @Column(name = "idrequest")
    public int getIdRequest() {
        return idRequest;
    }

    public void setIdRequest(int idRequest) {
        this.idRequest = idRequest;
    }

    @Basic
    @Column(name = "name_company")
    public String getNamecompany() {
        return namecompany;
    }

    public void setNamecompany(String namecompany) {
        this.namecompany = namecompany;
    }

    @Column(name = "date_practice_first")
    public String getDatefrom() {
        return datefrom;
    }

    public void setDatefrom(String datefrom) {
        this.datefrom = datefrom;
    }

    @Column(name = "date_practice_second")
    public String getDateto() {
        return dateto;
    }

    public void setDateto(String dateto) {
        this.dateto = dateto;
    }

    @Basic
    @Column(name = "min_average_score")
    public double getMinaverage() {
        return minaverage;
    }

    public void setMinaverage(double minaverage) {
        this.minaverage = minaverage;
    }

    @Basic
    @Column(name = "total_quantity")
    public int getTotalquantity() {
        return totalquantity;
    }

    public void setTotalquantity(int totalquantity) {
        this.totalquantity = totalquantity;
    }

    @Basic
    @Column(name = "status_practice")
    public String getStatuspractice() {
        return statuspractice;
    }

    public void setStatuspractice(String statuspractice) {
        this.statuspractice = statuspractice;
    }

    @Basic
    @Column(name = "specreqid")
    public Integer getSpecialityId() {
        return specialityId;
    }

    public void setSpecialityId(Integer specialityId) {
        this.specialityId = specialityId;
    }


    @Basic
    @Column(name = "accountrid")
    public Integer getHeadOfPracticeId() {
        return headOfPracticeId;
    }

    public void setHeadOfPracticeId(Integer headOfPracticeId) {
        this.headOfPracticeId = headOfPracticeId;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        RequestEntity that = (RequestEntity) o;

        if (idRequest != that.idRequest) return false;
        if (Double.compare(that.minaverage, minaverage) != 0) return false;
        if (totalquantity != that.totalquantity) return false;
        if (namecompany != null ? !namecompany.equals(that.namecompany) : that.namecompany != null) return false;
        if (datefrom != null ? !datefrom.equals(that.datefrom) : that.datefrom != null) return false;
        if (dateto != null ? !dateto.equals(that.dateto) : that.dateto != null) return false;
        if (statuspractice != null ? !statuspractice.equals(that.statuspractice) : that.statuspractice != null)
            return false;
        if (specialityId != null ? !specialityId.equals(that.specialityId) : that.specialityId != null) return false;
        if (headOfPracticeId != null ? !headOfPracticeId.equals(that.headOfPracticeId) : that.headOfPracticeId != null)
            return false;
        return students != null ? students.equals(that.students) : that.students == null;
    }

    @Override
    public int hashCode() {
        int result;
        long temp;
        result = idRequest;
        result = 31 * result + (namecompany != null ? namecompany.hashCode() : 0);
        result = 31 * result + (datefrom != null ? datefrom.hashCode() : 0);
        result = 31 * result + (dateto != null ? dateto.hashCode() : 0);
        temp = Double.doubleToLongBits(minaverage);
        result = 31 * result + (int) (temp ^ (temp >>> 32));
        result = 31 * result + totalquantity;
        result = 31 * result + (statuspractice != null ? statuspractice.hashCode() : 0);
        result = 31 * result + (specialityId != null ? specialityId.hashCode() : 0);
        result = 31 * result + (headOfPracticeId != null ? headOfPracticeId.hashCode() : 0);
        result = 31 * result + (students != null ? students.hashCode() : 0);
        return result;
    }

    @ManyToOne
    @JoinColumn(name = "accountrid", referencedColumnName = "idaccounts",nullable = false, insertable = false, updatable = false)
    public AccountEntity getAccountEntity() {
        return accountEntity;
    }

    public void setAccountEntity(AccountEntity accountEntity) {
        this.accountEntity = accountEntity;
    }

    @ManyToOne
    @JoinColumn(name = "specreqid", referencedColumnName = "idSpeciality", insertable = false, updatable = false)
    public SpecialityEntity getSpecialityEntity() {
        return specialityEntity;
    }

    public void setSpecialityEntity(SpecialityEntity specialityEntity) {
        this.specialityEntity = specialityEntity;
    }

    @ManyToMany(fetch = FetchType.EAGER, cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH, CascadeType.DETACH},mappedBy = "request_companies")
    public Set<StudentEntity> getStudents() {
        return students;
    }

    public void setStudents(Set<StudentEntity> students) {
        this.students = students;
    }
}
