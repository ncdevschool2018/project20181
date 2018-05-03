package by.netcracker.models;

import by.netcracker.security.impl.CustomUser;
import org.springframework.security.core.GrantedAuthority;

import java.util.List;

public class AccountViewModel extends CustomUser {
    private String idAccount;
    //private String login;
    //private String password;
    private String email;
    private String role;
    private String firstname;
    private String lastname;
    private String patronymic;

    public AccountViewModel(){}

    public AccountViewModel(String username, String password, List<GrantedAuthority> authorities) {
        super(username, password, authorities);
    }

    public String getIdAccount() {
        return idAccount;
    }

    public void setIdAccount(String idAccount) {
        this.idAccount = idAccount;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getPatronymic() {
        return patronymic;
    }

    public void setPatronymic(String patronymic) {
        this.patronymic = patronymic;
    }
}
