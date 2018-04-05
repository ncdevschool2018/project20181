package by.netcracker.controllers;

import by.netcracker.entities.AccountEntity;
import by.netcracker.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AccountController {

    @Autowired
    private AccountService accountService;

    public static int id_Account;

    @RequestMapping(value = "/authorization", method = RequestMethod.GET)
    public ModelAndView authorization(ModelAndView modelAndView){
        modelAndView.setViewName("authorization");
        modelAndView.addObject("account", new AccountEntity());
        return modelAndView;
    }

    @RequestMapping(value = "/authorization/start", method = RequestMethod.POST)
    public String authorizationAccount(@ModelAttribute("account")AccountEntity accountEntity){

        AccountEntity accountEntity1 = this.accountService.authorizationAccount(accountEntity);
        if(accountEntity1.getRole().equals("user"))
            return "/user";
        if(accountEntity1.getRole().equals(("admin")))
            return "/admin";
        if(accountEntity1.getRole().equals("headpractice"))
            return "redirect:/students-view";

        return "/authorization";
    }

}
