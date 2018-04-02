package by.netcracker.controllers;

import by.netcracker.models.StudentViewModel;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;
import java.util.List;

@Controller
public class StudentController {

    @RequestMapping(value = "/student-view", method = RequestMethod.GET)
    public ModelAndView getStudentInformation(){
        ModelAndView studentMAV = new ModelAndView();
        studentMAV.setViewName("headpractice");
        studentMAV.addObject("studentcontr", getStubStudent());
        return studentMAV;
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
