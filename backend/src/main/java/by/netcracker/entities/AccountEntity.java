package by.netcracker.entities;


import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;
import java.util.Collection;

@Entity
@Table(name = "accounts", schema = "netcracker", catalog = "")
public class AccountEntity {
    private int id;
    private String login;
    private String password;
    private String email;
    private String role;
    private String firstname;
    private String lastname;
    private String patronymic;
   // private StudentEntity studentEntity;
    private Collection<StudentEntity> studentsById;
    private Collection<RequestEntity> practicesById;


    private String confirmPassword;
    @Transient
    public String getConfirmPassword() {
        return confirmPassword;
    }
    public void setConfirmPassword(String confirmPassword) {
        this.confirmPassword = confirmPassword;
    }

    @Id
    @Column(name = "idaccounts")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic
    @NotEmpty(message="Username cannot be empty")
    @Size(min=1,max=8,message="Size should be between 1 to 8")
    @Column(name = "login")
    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    @Basic
    @NotEmpty(message="Password cannot be empty")
    @Column(name = "password")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Basic
    @NotEmpty(message="Email Address cannot be empty")
    @Email(message="Please enter a valid email address")
    @Column(name = "email")
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Basic
    @Column(name = "role")
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }


    @Basic
    @NotEmpty(message="FirstName cannot be empty")
    @Size(min=1,max=8,message="Size should be between 1 to 8")
    @Pattern(regexp="^[a-zA-Z]+$",message="The field should not contain numbers")
    @Column(name = "name")
    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    @Basic
    @NotEmpty(message="LastName cannot be empty")
    @Size(min=1,max=8,message="Size should be between 1 to 8")
    @Pattern(regexp="^[a-zA-Z]+$",message="The field should not contain numbers")
    @Column(name = "surname")
    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    @Basic
    @NotEmpty(message="Patronymic cannot be empty")
    @Size(min=1,max=8,message="Size should be between 1 to 8")
    @Pattern(regexp="^[a-zA-Z ,.'-]+$",message="The field should not contain numbers")
    @Column(name = "patronymic")
    public String getPatronymic() {
        return patronymic;
    }

    public void setPatronymic(String patronymic) {
        this.patronymic = patronymic;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AccountEntity that = (AccountEntity) o;

        if (id != that.id) return false;
        if (login != null ? !login.equals(that.login) : that.login != null) return false;
        if (password != null ? !password.equals(that.password) : that.password != null) return false;
        if (email != null ? !email.equals(that.email) : that.email != null) return false;
        if (role != null ? !role.equals(that.role) : that.role != null) return false;
        if (firstname != null ? !firstname.equals(that.firstname) : that.firstname != null) return false;
        if (lastname != null ? !lastname.equals(that.lastname) : that.lastname != null) return false;
        return patronymic != null ? patronymic.equals(that.patronymic) : that.patronymic == null;
    }

    @Override
    public int hashCode() {
        int result = id;
        result = 31 * result + (login != null ? login.hashCode() : 0);
        result = 31 * result + (password != null ? password.hashCode() : 0);
        result = 31 * result + (email != null ? email.hashCode() : 0);
        result = 31 * result + (role != null ? role.hashCode() : 0);
        result = 31 * result + (firstname != null ? firstname.hashCode() : 0);
        result = 31 * result + (lastname != null ? lastname.hashCode() : 0);
        result = 31 * result + (patronymic != null ? patronymic.hashCode() : 0);
        return result;
    }

    /*@OneToOne
        @JoinColumn(name = "studentacid", referencedColumnName = "idstudent")
        public StudentEntity getStudentEntity() {
            return studentEntity;
        }

        public void setStudentEntity(StudentEntity studentEntity) {
            this.studentEntity = studentEntity;
        }*/
    @OneToMany(mappedBy = "accountEntityByStudent")
    public Collection<StudentEntity> getStudentsById() {
        return studentsById;
    }

    public void setStudentsById(Collection<StudentEntity> studentsById) {
        this.studentsById = studentsById;
    }

    @OneToMany(mappedBy = "accountEntity")
    public Collection<RequestEntity> getPracticesById() {
        return practicesById;
    }

    public void setPracticesById(Collection<RequestEntity> practicesById) {
        this.practicesById = practicesById;
    }
}
