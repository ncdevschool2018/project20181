package by.netcracker.converters;

import by.netcracker.entities.FacultyEntity;
import by.netcracker.entities.RequestEntity;
import by.netcracker.entities.SpecialityEntity;
import by.netcracker.models.RequestViewModel;
import org.springframework.core.convert.converter.Converter;

public class RequestEntityToRequestViewModelConverter implements Converter<RequestEntity,RequestViewModel> {

    @Override
    public RequestViewModel convert(RequestEntity requestEntity) {

        RequestViewModel requestViewModel = new RequestViewModel();
        requestViewModel.setIdRequest(String.valueOf(requestEntity.getId()));
        requestViewModel.setNamecompany(requestEntity.getNamecompany());
        requestViewModel.setDatefrom(String.valueOf(requestEntity.getDatefrom()));
        requestViewModel.setDateto(String.valueOf(requestEntity.getDateto()));
        requestViewModel.setMinaverage(String.valueOf(requestEntity.getMinaverage()));
        requestViewModel.setStatuspractice(requestEntity.getStatuspractice());
        requestViewModel.setTotalquantity(String.valueOf(requestEntity.getTotalquantity()));

        SpecialityEntity specialityEntity = requestEntity.getSpecialityEntity();
        if(specialityEntity != null)
            requestViewModel.setSpecialityId(String.valueOf(specialityEntity.getId()));
            requestViewModel.setNameSpeciality(specialityEntity.getNamespeciality());

            FacultyEntity facultyEntity = specialityEntity.getFacultyByFaculty();
            if(facultyEntity != null)
                requestViewModel.setFacultyId(String.valueOf(facultyEntity.getId()));
                requestViewModel.setNameFaculty(facultyEntity.getNamefaculty());

        return requestViewModel;
    }
}
