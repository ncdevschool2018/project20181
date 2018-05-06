package by.netcracker.controllers;

import by.netcracker.entities.RequestEntity;
import by.netcracker.enumiration.RequestStatus;
import by.netcracker.enumiration.StudentStatus;
import by.netcracker.entities.StudentEntity;
import by.netcracker.enumiration.ViewName;
import by.netcracker.models.StudentViewModel;


import by.netcracker.services.RequestService;
import by.netcracker.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.ConversionService;
import org.springframework.core.convert.TypeDescriptor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.List;

@Controller
public class StudentController {
    private ConversionService conversionService;
    private StudentService studentService;
    private RequestService requestService;

    @Autowired
    public void setConversionService(ConversionService conversionService) {
        this.conversionService = conversionService;
    }
    @Autowired
    public void setStudentService(StudentService studentService) {
        this.studentService = studentService;
    }
    @Autowired
    public void setRequestService(RequestService requestService) {
        this.requestService = requestService;
    }

    private final TypeDescriptor studentEntityTypeDescriptor = TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(StudentEntity.class));
    private final TypeDescriptor studentViewModelTypeDescriptor = TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(StudentViewModel.class));

    @RequestMapping(value = "/students-view-head", method = RequestMethod.GET)
    public ModelAndView getStudentInformationHead(){
        ModelAndView studentListMAV = new ModelAndView();

        studentListMAV.setViewName(ViewName.VIEW_NAME_HEAD);
        studentListMAV.addObject("studentListForMAV", this.studentService.findAllStudents());
        return studentListMAV;
    }

    @RequestMapping(value = "/students-view-student", method = RequestMethod.GET)
    public ModelAndView getStudentInformationStudent(){
        ModelAndView studentListMAV = new ModelAndView();

        studentListMAV.setViewName(ViewName.VIEW_NAME_USER);
        studentListMAV.addObject("studentListForMAV", this.studentService.findAllStudents());
        return studentListMAV;
    }

    @RequestMapping(value = "/students-view/{id}")
    public ModelAndView getStudentInformationByOne(@PathVariable("id") int id){
        ModelAndView studentOneMAV = new ModelAndView();
        studentOneMAV.setViewName(ViewName.VIEW_NAME_USER);
        studentOneMAV.addObject("objAboutStudent", this.studentService.findOneStudent(id));
        return studentOneMAV;
    }

    @RequestMapping(value = "/students-view-admin", method = RequestMethod.GET)
    public ModelAndView getStudentInformationAdmin() {
        ModelAndView studentListMAV = new ModelAndView();

        studentListMAV.setViewName(ViewName.VIEW_NAME_ADMIN);
        studentListMAV.addObject("studentListForMAV", this.studentService.findAllStudents());
        return studentListMAV;
    }

    @RequestMapping(value = "/studentTable", method = RequestMethod.GET)
    @ResponseBody
    public ModelMap studentTable(@RequestParam String sort, @RequestParam String order, @RequestParam Integer offset, @RequestParam Integer limit){

        ModelMap modelMap = new ModelMap();
        List<StudentEntity> studentEntities = this.studentService.getPaginationAndSortedPageList(sort, order, offset, limit);
        modelMap.addAttribute("rows", this.conversionService.convert(studentEntities,studentEntityTypeDescriptor,studentViewModelTypeDescriptor));
        modelMap.addAttribute("total", this.studentService.findAllStudents().size());
        return modelMap;
    }

    @RequestMapping(value = "/studentListForSelect", method = RequestMethod.GET)
    @ResponseBody
    public List<StudentViewModel> getAllStudentsForSelect(){
        List<StudentEntity> allStudents = studentService.findAllStudentsByAvailable();
        return (List<StudentViewModel>) this.conversionService.convert(allStudents, studentEntityTypeDescriptor,studentViewModelTypeDescriptor);
    }

    @RequestMapping(value = "/studentList", method = RequestMethod.GET)
    @ResponseBody
    public List<StudentViewModel> getAllStudents(){
        List<StudentEntity> allStudents = studentService.findAllStudents();
        return (List<StudentViewModel>) this.conversionService.convert(allStudents, studentEntityTypeDescriptor,studentViewModelTypeDescriptor);
    }

    @RequestMapping(value = "/createOrEditStudent", method = RequestMethod.POST)
    @ResponseBody
    public StudentViewModel addStudent(@RequestBody StudentEntity studentEntity) {
        this.studentService.addStudent(studentEntity);
        if(studentEntity.getIdStudent() != 0) {
            Integer idStud = this.studentService.getIdLastCreatedStudent();
            return this.conversionService.convert(this.studentService.findOneStudent(idStud), StudentViewModel.class);
        }
        else return this.conversionService.convert(studentEntity,StudentViewModel.class);
    }

    @RequestMapping(value = "/loadStudentForEdit", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public StudentViewModel getOneStudentForLoadEditStudent(@RequestParam("data1") String idStudent){
        StudentEntity studentEntity = this.studentService.findOneStudent(Integer.valueOf(idStudent));
        return this.conversionService.convert(studentEntity,StudentViewModel.class);
    }

    @RequestMapping(value = "/deleteStudent", method = RequestMethod.POST)
    @ResponseBody
    public List<StudentViewModel> deleteStudentList(@RequestBody List<StudentEntity> studentEntities){

        int[] masForDeleteStudent = new int[studentEntities.size()];
        int i = 0;
        for(StudentEntity stud : studentEntities){
            masForDeleteStudent[i] = stud.getIdStudent();
            i++;
        }

        for(i = 0; i < masForDeleteStudent.length; i++){
            StudentEntity studentEntity = this.studentService.findOneStudent(masForDeleteStudent[i]);

            for(RequestEntity request : studentEntity.getRequest_companies()){
                    request.setStatuspractice(RequestStatus.AVAILABLE_REQUEST);
                    this.requestService.addRequest(request);
            }
            studentEntity.getRequest_companies().clear(); //освободение от практики
            this.studentService.addStudent(studentEntity);
            this.studentService.deleteStudentById(masForDeleteStudent[i]);
        }
        return (List<StudentViewModel>) this.conversionService.convert(studentEntities,studentEntityTypeDescriptor,studentViewModelTypeDescriptor);
    }

    @RequestMapping(value = "/releaseStudent", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public boolean releaseStudentFromRequest(@RequestParam("data1") String idStudent) {
        StudentEntity studentEntity = this.studentService.findOneStudent(Integer.valueOf(idStudent));

        if(studentEntity.getRequest_companies().size() == 0){
            return false;
        }
        else {
            for (RequestEntity request : studentEntity.getRequest_companies()) {
                request.setStatuspractice(RequestStatus.AVAILABLE_REQUEST);
                this.requestService.addRequest(request);
            }
            studentEntity.getRequest_companies().clear(); //осовбождение от практики
            studentEntity.setStatuspractice(StudentStatus.AVAILABLE_STUDENT);
            this.studentService.addStudent(studentEntity);
            return true;
        }
    }

    @RequestMapping(value = "/aboutStudent", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public ModelAndView aboutStudent(@RequestParam("studentId") String idStudent){
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("objAboutStudent", this.studentService.findOneStudent(Integer.valueOf(idStudent)));
        modelAndView.setViewName(ViewName.VIEW_NAME_USER);
        return modelAndView;
    }

    /*@RequestMapping(value = "/students-view-student", method = RequestMethod.GET)
    public ModelAndView getStudentInformationStudent(){
        ModelAndView studentListMAV = new ModelAndView();

        studentListMAV.setViewName(ViewName.VIEW_NAME_USER);
        studentListMAV.addObject("studentListForMAV", this.studentService.findAllStudents());
        return studentListMAV;
    }*/
}
