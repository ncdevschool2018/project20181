
package by.netcracker.controllers;


import by.netcracker.security.LoginUserService;
import by.netcracker.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

@Controller
public class PageController {
    private LoginUserService loginUserService;
    @Autowired
    public void setLoginUserService(LoginUserService loginUserService) {
        this.loginUserService = loginUserService;
    }

    @RequestMapping(value = "/home", method = RequestMethod.GET)
    public String goToHomePage() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
       String redirectView = "redirect:/authorization";
        if (authentication != null) {
            redirectView = this.loginUserService.resolveHomeView(((List<GrantedAuthority>) authentication.getAuthorities()));
        }
        return "redirect:/students-view-admin";
    }


}
