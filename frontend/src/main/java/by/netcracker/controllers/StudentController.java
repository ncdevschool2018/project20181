package by.netcracker.controllers;

import by.netcracker.entities.AccountEntity;
import by.netcracker.entities.RequestEntity;
import by.netcracker.entities.StudentEntity;
import by.netcracker.models.AccountViewModel;
import by.netcracker.models.RequestViewModel;
import by.netcracker.models.SpecialityViewModel;
import by.netcracker.models.StudentViewModel;
import by.netcracker.services.AccountService;


import by.netcracker.services.RequestService;
import by.netcracker.services.StudentService;
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
    private StudentService studentService;
    private AccountService accountService;

    @Autowired
    public void setConversionService(ConversionService conversionService) {
        this.conversionService = conversionService;
    }
    @Autowired
    public void setStudentService(StudentService studentService) {
        this.studentService = studentService;
    }
    @Autowired
    public void setAccountService(AccountService accountService) {
        this.accountService = accountService;
    }

    private static final String VIEW_NAME_USER = "user";
    private static final String VIEW_NAME_ADMIN = "admin";

    private final TypeDescriptor studentEntityTypeDescriptor = TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(StudentEntity.class));
    private final TypeDescriptor studentViewModelTypeDescriptor = TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(StudentViewModel.class));

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
        List<StudentEntity> allStudents = studentService.findAllStudents();
        return (List<StudentViewModel>) this.conversionService.convert(allStudents, studentEntityTypeDescriptor,studentViewModelTypeDescriptor);
    }

    @RequestMapping(value = "/users", method = RequestMethod.POST)
    @ResponseBody
    public StudentViewModel getUsersAsJson(@RequestBody StudentViewModel userViewModel) {
        return userViewModel;
    }



   /* @RequestMapping(value = "/speciality", method = RequestMethod.POST)
    @ResponseBody
    public SpecialityViewModel addSpeciality(@RequestBody SpecialityViewModel specialityViewModel){
        return specialityViewModel;
    }*/

}
