package by.netcracker.controllers;

import by.netcracker.entities.AccountEntity;
import by.netcracker.enumiration.AccountRole;
import by.netcracker.enumiration.ViewName;
import by.netcracker.models.AccountViewModel;
import by.netcracker.security.LoginUserService;
import by.netcracker.services.AccountService;
import by.netcracker.validator.AccountValidator;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.ConversionService;
import org.springframework.core.convert.TypeDescriptor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;

@Controller
public class AccountController {
    private ConversionService conversionService;
    private AccountService accountService;
    private LoginUserService loginUserService;
    @Autowired
    private AccountValidator accountValidator;

    private final TypeDescriptor accountEntityTypeDescriptor = TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(AccountEntity.class));
    private final TypeDescriptor accountViewModelTypeDescriptor = TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(AccountViewModel.class));

    @Autowired
    public void setLoginUserService(LoginUserService loginUserService) {
        this.loginUserService = loginUserService;
    }

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

        modelAndView.setViewName(ViewName.VIEW_NAME_AUTHORIZATION);
        modelAndView.addObject("account", new AccountEntity());
        return modelAndView;
    }

    @RequestMapping("/registration")
    public String displayForm(Map model)
    {
        model.put("accountEntity",new AccountEntity());
        return ViewName.VIEW_NAME_REGISTRATION;
    }

    @RequestMapping(value = "/registrate", method = RequestMethod.POST)
    public String registration(@Valid @ModelAttribute("accountEntity") AccountEntity accountEntity, BindingResult result,HttpServletRequest request, HttpServletResponse response){
        this.accountValidator.validate(accountEntity,result);

        if(result.hasErrors())
        {
            return ViewName.VIEW_NAME_REGISTRATION;
        }
        else {
            accountEntity.setRole(AccountRole.ROLE_STUDENT);
            String md5Hex = DigestUtils.md5Hex(accountEntity.getPassword());
            accountEntity.setPassword(md5Hex);
            this.accountService.addAccount(accountEntity);
            return ViewName.VIEW_NAME_AUTHORIZATION;
        }
    }
    /*@RequestMapping(value = "/registration", method = RequestMethod.GET)
    public ModelAndView registration(ModelAndView modelAndView){
        modelAndView.setViewName(ViewName.VIEW_NAME_REGISTRATION);
        modelAndView.addObject("account", new AccountEntity());
        return modelAndView;
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
    public boolean createHeadOfPractice(@RequestBody AccountEntity accountEntity){
        String md5Hex = DigestUtils.md5Hex(accountEntity.getPassword());
        accountEntity.setPassword(md5Hex);
        accountEntity.setRole(AccountRole.ROLE_HEAD);
        accountService.addAccount(accountEntity);
        return true;
    }

}
