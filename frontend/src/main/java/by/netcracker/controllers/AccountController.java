package by.netcracker.controllers;

import by.netcracker.entities.AccountEntity;
import by.netcracker.models.AccountViewModel;
import by.netcracker.services.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.ConversionService;
import org.springframework.core.convert.TypeDescriptor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import java.util.List;

@Controller
public class AccountController {
    private ConversionService conversionService;
    private AccountService accountService;

    private final TypeDescriptor accountEntityTypeDescriptor = TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(AccountEntity.class));
    private final TypeDescriptor accountViewModelTypeDescriptor = TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(AccountViewModel.class));

    @Autowired
    public void setConversionService(ConversionService conversionService) {
        this.conversionService = conversionService;
    }
    @Autowired
    public void setAccountService(AccountService accountService) {
        this.accountService = accountService;
    }

    @RequestMapping(value = "/authorization", method = RequestMethod.GET)
    public ModelAndView authorization(ModelAndView modelAndView){
        modelAndView.setViewName("authorization");
        modelAndView.addObject("account", new AccountEntity());
        return modelAndView;
    }

   /* @RequestMapping(value = "/authorization/start", method = RequestMethod.POST)
    public String authorizationAccount(@ModelAttribute("account")AccountEntity accountEntity){

        AccountEntity accountEntity1 = this.accountService.authorizationAccount(accountEntity);
        if(accountEntity1.getRole().equals("student"))
            return "/students-view/{}";
        if(accountEntity1.getRole().equals(("admin")))
            return "redirect:/students-view-admin";
        if(accountEntity1.getRole().equals("head"))
            return "redirect:/students-view";

        return "/authorization";
    }*/

    @RequestMapping(value = "/headOfPracticeList", method = RequestMethod.GET)
    @ResponseBody
    public List<AccountViewModel> getAllHeadOfPracticeForTypeahead() {
        List<AccountEntity> accountEntities = this.accountService.getAllHeadOfPractice();
        return (List<AccountViewModel>) this.conversionService.convert(accountEntities,accountEntityTypeDescriptor,accountViewModelTypeDescriptor);
    }

    @RequestMapping(value = "/studentsAccountList", method = RequestMethod.GET)
    @ResponseBody
    public List<AccountViewModel> getAllStudentForTypeahead() {
        List<AccountEntity> accountEntities = this.accountService.getAllStudents();
        return (List<AccountViewModel>) this.conversionService.convert(accountEntities,accountEntityTypeDescriptor,accountViewModelTypeDescriptor);
    }

    @RequestMapping(value = "/createHeadOfPractice", method = RequestMethod.POST)
    @ResponseBody
    public AccountEntity createHeadOfPractice(@RequestBody AccountEntity accountEntity){
        accountService.addHeadOfPractice(accountEntity);
        return accountEntity;
    }
}
