package by.netcracker.controllers;


import by.netcracker.entities.AccountEntity;
import by.netcracker.enumiration.AccountRole;
import by.netcracker.security.LoginUserService;
import by.netcracker.security.impl.CustomUser;
import by.netcracker.services.AccountService;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Map;


@Controller
public class LoginController {

    private LoginUserService loginUserService;
    private AccountService accountService;

    @Autowired
    public void setAccountService(AccountService accountService) {
        this.accountService = accountService;
    }

    @Autowired
    public void setLoginUserService(LoginUserService loginUserService) {
        this.loginUserService = loginUserService;
    }

    @RequestMapping(value = "/authorize", method = RequestMethod.POST)
    public void login(@RequestBody CustomUser loginData, HttpServletRequest request, HttpServletResponse response) {
        try {
            this.loginUserService.authenticateUserAndSetSession(loginData.getUsername(), loginData.getPassword(), request, response);
        } catch (BadCredentialsException e) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        }
    }
    @RequestMapping(value = "/createStudentAccount", method = RequestMethod.POST)
    @ResponseBody
    public void createStudentAccountForRegistration(@RequestBody AccountEntity accountEntity){
        accountEntity.setRole(AccountRole.ROLE_STUDENT);
        String md5Hex = DigestUtils.md5Hex(accountEntity.getPassword());
        accountEntity.setPassword(md5Hex);
        this.accountService.addAccount(accountEntity);
    }

}
