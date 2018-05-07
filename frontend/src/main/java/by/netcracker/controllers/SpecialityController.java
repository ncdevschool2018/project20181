package by.netcracker.controllers;

import by.netcracker.entities.SpecialityEntity;
import by.netcracker.entities.StudentEntity;
import by.netcracker.models.SpecialityViewModel;
import by.netcracker.services.SpecialityService;
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
public class SpecialityController {
    private ConversionService conversionService;
    private SpecialityService specialityService;

    @Autowired
    public void setConversionService(ConversionService conversionService) {
        this.conversionService = conversionService;
    }

    @Autowired
    public void setSpecialityService(SpecialityService specialityService) {
        this.specialityService = specialityService;
    }



    private final TypeDescriptor specialityEntityTypeDescriptor = TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(SpecialityEntity.class));
    private final TypeDescriptor specialityViewModelTypeDescriptor = TypeDescriptor.collection(List.class, TypeDescriptor.valueOf(SpecialityViewModel.class));


    @RequestMapping(value = "/specialtyList", method = RequestMethod.GET)
    @ResponseBody
    public List<SpecialityViewModel> getAllSpecialitiesForTypeahead() {
        List<SpecialityEntity> facultyEntities = this.specialityService.getAllSpecialities();
        return (List<SpecialityViewModel>) this.conversionService.convert(facultyEntities,specialityEntityTypeDescriptor,specialityViewModelTypeDescriptor);
    }



    @RequestMapping(value = "/createSpecialty", method = RequestMethod.POST)
    @ResponseBody
    public SpecialityEntity createSpecialty(@RequestBody SpecialityEntity specialtyEntity){
        specialityService.addSpeciality(specialtyEntity);
        return specialtyEntity;
    }
}
