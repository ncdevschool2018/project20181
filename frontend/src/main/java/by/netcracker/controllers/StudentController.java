package by.netcracker.controllers;

import by.netcracker.models.StudentViewModel;
import by.netcracker.services.StudentService;

import com.sun.org.apache.xpath.internal.operations.Mod;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;

@Controller
public class StudentController {

    @Autowired
    private StudentService studentService;


    @RequestMapping(value = "/students-view", method = RequestMethod.GET)
    public ModelAndView getStudentInformation(){
        ModelAndView studentMAV = new ModelAndView();
        studentMAV.setViewName("headpractice");
        studentMAV.addObject("studentcontr", studentService.findAllStudents());
        return studentMAV;
    }

    @RequestMapping(value = "/students-view/{id}")
    public ModelAndView getStudentInformationByOne(@PathVariable("id") int id){
        ModelAndView studoneMAV = new ModelAndView();
        studoneMAV.setViewName("user");
        studoneMAV.addObject("studoneob", studentService.getStudentById(id));
        return studoneMAV;
    }



    private List<StudentViewModel> getStubStudent() {
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
    }
}
