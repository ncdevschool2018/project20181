package by.netcracker.controllers;

import by.netcracker.entities.AccountEntity;
import by.netcracker.models.StudentViewModel;
import by.netcracker.services.AccountService;
import by.netcracker.services.StudentService;

import com.sun.org.apache.xpath.internal.operations.Mod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;

@Controller
public class StudentController {

    @Autowired
    private AccountService accountService;

    private static final String VIEW_NAME_USER = "user";
    private static final String VIEW_NAME_ADMIN = "admin";



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




    @RequestMapping(value = "/users", method = RequestMethod.POST)
    @ResponseBody
    public StudentViewModel getUsersAsJson(@RequestBody StudentViewModel userViewModel) {
        return userViewModel;
    }



    /*private List<StudentViewModel> getStubStudent() {
        List<StudentViewModel> userViewModels = new ArrayList<>();
        StudentViewModel userViewModelIvan  = new StudentViewModel();
        userViewModelIvan.setId(113);
        userViewModelIvan.setFirstnameofstudent("Ivan");
        userViewModelIvan.setLastnameofstudent("Danilkovich");
        StudentViewModel userViewModelLeopold = new StudentViewModel();
        userViewModelLeopold.setId(114);
        userViewModelLeopold.setFirstnameofstudent("Leopold");
        userViewModelLeopold.setLastnameofstudent("Danilkovich");
        userViewModels.add(userViewModelIvan);
        userViewModels.add(userViewModelLeopold);
        return userViewModels;
    }*/
}
