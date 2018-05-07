package by.netcracker.controllers;

import by.netcracker.enumiration.RequestStatus;
import by.netcracker.entities.RequestEntity;
import by.netcracker.entities.StudentEntity;
import by.netcracker.enumiration.StudentStatus;
import by.netcracker.models.RequestViewModel;
import by.netcracker.services.RequestService;
import by.netcracker.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.ConversionService;
import org.springframework.core.convert.TypeDescriptor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@Controller
public class RequestController {
    private RequestService requestService;
    private StudentService studentService;
    private ConversionService conversionService;

    private final TypeDescriptor requestEntityTypeDescriptor = TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(RequestEntity.class));
    private final TypeDescriptor requestViewModelTypeDescriptor = TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(RequestViewModel.class));

    @Autowired
    public void setRequestService(RequestService requestService) {
        this.requestService = requestService;
    }
    @Autowired
    public void setStudentService(StudentService studentService) {
        this.studentService = studentService;
    }
    @Autowired
    public void setConversionService(ConversionService conversionService) {
        this.conversionService = conversionService;
    }



    @RequestMapping(value = "/assignStudentOnPractice", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public void assignOneStudentOnPractice(@RequestParam("student") String idStudent, @RequestParam("practice") String idRequest){
        RequestEntity requestEntity = this.requestService.findOneRequest(Integer.valueOf(idRequest));
        StudentEntity studentEntity = this.studentService.findOneStudent(Integer.valueOf(idStudent));

        if(requestEntity.getTotalquantity() - requestEntity.getStudents().size() > 0) {
            if(requestEntity.getTotalquantity() - requestEntity.getStudents().size() == 1)
                requestEntity.setStatuspractice(RequestStatus.NOT_AVAILABLE_REQUEST); //если остался один запрос, на который распределиться чел
            else  requestEntity.setStatuspractice(RequestStatus.AVAILABLE_REQUEST);

            this.requestService.addRequest(requestEntity);

            studentEntity.getRequest_companies().add(requestEntity);
            /*HHH*/
            studentEntity.setStatuspractice(StudentStatus.ON_PRACTICE_STUDENT);
            studentService.addStudent(studentEntity);
        }
    }

    @RequestMapping(value = "/reassignStudentOnPractice", method = RequestMethod.POST)
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public void reassignOneStudentOnPractice(@RequestParam("student") String idStudent, @RequestParam("practice") String idRequest){
        RequestEntity requestEntity = this.requestService.findOneRequest(Integer.valueOf(idRequest));
        StudentEntity studentEntity = this.studentService.findOneStudent(Integer.valueOf(idStudent));

        for (RequestEntity request : studentEntity.getRequest_companies()){
            request.setStatuspractice(RequestStatus.AVAILABLE_REQUEST);
            this.requestService.addRequest(request);
        }
        studentEntity.getRequest_companies().clear(); //осовбождение от практики
        studentEntity.setStatuspractice(StudentStatus.AVAILABLE_STUDENT);
        this.studentService.addStudent(studentEntity);


        if(requestEntity.getTotalquantity() - requestEntity.getStudents().size() > 0) {
            if (requestEntity.getTotalquantity() - requestEntity.getStudents().size() == 1)
                requestEntity.setStatuspractice(RequestStatus.NOT_AVAILABLE_REQUEST); //если остался один запрос, на который распределиться чел
            else requestEntity.setStatuspractice(RequestStatus.AVAILABLE_REQUEST);

            this.requestService.addRequest(requestEntity);

            studentEntity.getRequest_companies().add(requestEntity);
            /*HHH*/
            studentEntity.setStatuspractice(StudentStatus.ON_PRACTICE_STUDENT);
            studentService.addStudent(studentEntity);
        }
    }



    @RequestMapping(value = "/requestList", method = RequestMethod.GET)
    @ResponseBody
    public List<RequestViewModel> getAllRequests(){
        List<RequestEntity> allRequests = requestService.findAllRequests();
        return (List<RequestViewModel>) this.conversionService.convert(allRequests, requestEntityTypeDescriptor, requestViewModelTypeDescriptor);
    }
    @RequestMapping(value = "/requestListForSelect", method = RequestMethod.GET)
    @ResponseBody
    public List<RequestViewModel> getAllRequestsForSelect(){
        List<RequestEntity> allRequests = requestService.findAllRequestsByAvailable();
        return (List<RequestViewModel>) this.conversionService.convert(allRequests, requestEntityTypeDescriptor, requestViewModelTypeDescriptor);
    }

    @RequestMapping(value = "/loadRequestForEdit", method = RequestMethod.GET)
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public RequestViewModel getOneRequestForLoadEditRequest(@RequestParam("data1") String idRequest){
        RequestEntity requestEntity = this.requestService.findOneRequest(Integer.valueOf(idRequest));
        return this.conversionService.convert(requestEntity, RequestViewModel.class);
    }

    @RequestMapping(value = "/createRequest", method = RequestMethod.POST)
    @ResponseBody
    public RequestEntity AddRequest(@RequestBody RequestEntity requestEntity) {
        //RequestEntity requestEntity = this.conversionService.convert(requestViewModel, RequestEntity.class);
        this.requestService.addRequest(requestEntity);
        return requestEntity;
    }

    @RequestMapping(value = "/deleteRequest", method = RequestMethod.POST)
    public void deleteRequestList(@RequestBody List<RequestViewModel> requestViewModels){
        int[] masForDeleteRequest = new int[requestViewModels.size()];
        int i = 0;

        for (RequestViewModel request : requestViewModels){
            masForDeleteRequest[i] = Integer.parseInt(request.getIdRequest());
            i++;
        }

        for(i = 0; i < masForDeleteRequest.length; i++) {
            RequestEntity requestEntity = this.requestService.findOneRequest(masForDeleteRequest[i]);
            Set<StudentEntity> setStudentEntities = requestEntity.getStudents();

            for (StudentEntity studentEntity : setStudentEntities){
                studentEntity.getRequest_companies().remove(requestEntity);
                studentEntity.setStatuspractice(StudentStatus.AVAILABLE_STUDENT);
                this.studentService.addStudent(studentEntity);
            }
            this.requestService.deleteRequestById(masForDeleteRequest[i]);
        }


        //this.requestService.deleteRequestList((List<RequestEntity>) this.conversionService.convert(requestViewModels,requestViewModelTypeDescriptor,requestEntityTypeDescriptor));
    }
}
