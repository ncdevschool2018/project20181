package by.netcracker.controllers;

import by.netcracker.entities.RequestEntity;
import by.netcracker.models.RequestViewModel;
import by.netcracker.services.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.ConversionService;
import org.springframework.core.convert.TypeDescriptor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class RequestController {
    private RequestService requestService;
    private ConversionService conversionService;

    private final TypeDescriptor requestEntityTypeDescriptor = TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(RequestEntity.class));
    private final TypeDescriptor requestViewModelTypeDescriptor = TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(RequestViewModel.class));

    @Autowired
    public void setRequestService(RequestService requestService) {
        this.requestService = requestService;
    }

    @Autowired
    public void setConversionService(ConversionService conversionService) {
        this.conversionService = conversionService;
    }

    @RequestMapping(value = "/requestList", method = RequestMethod.GET)
    @ResponseBody
    public List<RequestViewModel> getAllRequests(){
        List<RequestEntity> allRequests = requestService.findAllRequests();
        return (List<RequestViewModel>) this.conversionService.convert(allRequests, requestEntityTypeDescriptor, requestViewModelTypeDescriptor);
    }

    @RequestMapping(value = "/createRequest", method = RequestMethod.POST)
    @ResponseBody
    public RequestViewModel AddRequest(@RequestBody RequestViewModel requestViewModel) {
        RequestEntity requestEntity = this.conversionService.convert(requestViewModel, RequestEntity.class);
        this.requestService.addRequest(requestEntity);
        return requestViewModel;
    }
}
