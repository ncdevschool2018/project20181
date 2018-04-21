package by.netcracker.controllers;

import by.netcracker.entities.AccountEntity;
import by.netcracker.entities.RequestEntity;
import by.netcracker.models.AccountViewModel;
import by.netcracker.models.RequestViewModel;
import by.netcracker.models.SpecialityViewModel;
import by.netcracker.models.StudentViewModel;
import by.netcracker.services.AccountService;


import by.netcracker.services.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.ConversionService;
import org.springframework.core.convert.TypeDescriptor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class StudentController {

    private ConversionService conversionService;
    private AccountService accountService;
    private RequestService requestService;

    @Autowired
    public void setRequestService(RequestService requestService) {
        this.requestService = requestService;
    }

    @Autowired
    public void setConversionService(ConversionService conversionService) {
        this.conversionService = conversionService;
    }
    @Autowired
    public void setAccountService(AccountService accountService) {
        this.accountService = accountService;
    }

    private static final String VIEW_NAME_USER = "user";
    private static final String VIEW_NAME_ADMIN = "admin";

    private final TypeDescriptor accountEntityTypeDescriptor = TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(AccountEntity.class));
    private final TypeDescriptor accountViewModelTypeDescriptor = TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(AccountViewModel.class));

    private final TypeDescriptor requestEntityTypeDescriptor = TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(RequestEntity.class));
    private final TypeDescriptor requestViewModelTypeDescriptor = TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(RequestViewModel.class));

    @RequestMapping(value = "/students-view", method = RequestMethod.GET)
    public ModelAndView getStudentInformation(){
        ModelAndView studentMAV = new ModelAndView();

        studentMAV.setViewName("headpractice");
        studentMAV.addObject("studentcontr", accountService.findAllStudents());
        return studentMAV;
    }

    @RequestMapping(value = "/students-view/{id}")
    public ModelAndView getStudentInformationByOne(@PathVariable("id") int id){
        ModelAndView studoneMAV = new ModelAndView();
        studoneMAV.setViewName(VIEW_NAME_USER);
        studoneMAV.addObject("studoneob", accountService.getStudentById(id));
        return studoneMAV;
    }

    @RequestMapping(value = "/students-view-admin", method = RequestMethod.GET)
    public ModelAndView getStudentInformation1(){
        ModelAndView studentMAV = new ModelAndView();

        studentMAV.setViewName(VIEW_NAME_ADMIN);
        studentMAV.addObject("studentcontr1", accountService.findAllStudents());
        return studentMAV;
    }


    @RequestMapping(value = "/students", method = RequestMethod.GET)
    @ResponseBody
    public List<StudentViewModel> getAllStudents(){
        List<AccountEntity> allStudents = accountService.findAllStudents();
        return (List<StudentViewModel>) this.conversionService.convert(allStudents, accountEntityTypeDescriptor, accountViewModelTypeDescriptor);
    }

    @RequestMapping(value = "/requests", method = RequestMethod.GET)
    @ResponseBody
    public List<RequestViewModel> getAllRequests(){
        List<RequestEntity> allRequests = requestService.findAllRequests();
        return (List<RequestViewModel>) this.conversionService.convert(allRequests, requestEntityTypeDescriptor, requestViewModelTypeDescriptor);
    }


    @RequestMapping(value = "/users", method = RequestMethod.POST)
    @ResponseBody
    public StudentViewModel getUsersAsJson(@RequestBody StudentViewModel userViewModel) {
        return userViewModel;
    }

    @RequestMapping(value = "/speciality", method = RequestMethod.POST)
    @ResponseBody
    public SpecialityViewModel addSpeciality(@RequestBody SpecialityViewModel specialityViewModel){
        return specialityViewModel;
    }

}
