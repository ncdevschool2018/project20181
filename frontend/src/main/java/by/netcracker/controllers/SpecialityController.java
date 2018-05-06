package by.netcracker.controllers;

import by.netcracker.entities.SpecialityEntity;
import by.netcracker.entities.StudentEntity;
import by.netcracker.models.SpecialityViewModel;
import by.netcracker.services.SpecialityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.ConversionService;
import org.springframework.core.convert.TypeDescriptor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    public List<SpecialityViewModel> getAllSpecialitiesForTypeahead(@RequestParam("facultyId") String idFaculty) {
        List<SpecialityEntity> facultyEntities = this.specialityService.getAllSpecialitiesByIdFaculty(Integer.valueOf(idFaculty));
        return (List<SpecialityViewModel>) this.conversionService.convert(facultyEntities,specialityEntityTypeDescriptor,specialityViewModelTypeDescriptor);
    }



    @RequestMapping(value = "/createSpecialty", method = RequestMethod.POST)
    @ResponseBody
    public boolean createSpecialty(@RequestBody SpecialityEntity specialtyEntity){
        specialityService.addSpeciality(specialtyEntity);
        return true;
    }
}
