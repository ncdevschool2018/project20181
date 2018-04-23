package by.netcracker.converters;

import by.netcracker.entities.RequestEntity;
import by.netcracker.models.RequestViewModel;
import org.springframework.core.convert.converter.Converter;

public class RequestViewModelToRequestEntityConverter implements Converter<RequestViewModel, RequestEntity> {

    @Override
    public RequestEntity convert(RequestViewModel requestViewModel) {
        RequestEntity requestEntity = new RequestEntity();
        requestEntity.setNamecompany(requestViewModel.getNamecompany());
        requestEntity.setDatefrom(requestViewModel.getDatefrom());
        requestEntity.setDateto(requestViewModel.getDateto());
        requestEntity.setMinaverage(Double.parseDouble(requestViewModel.getMinaverage()));
        requestEntity.setTotalquantity(Integer.parseInt(requestViewModel.getTotalquantity()));
        requestEntity.setStatuspractice(requestViewModel.getStatuspractice());
        requestEntity.setSpecialtyId(Integer.valueOf(requestViewModel.getSpecialityId()));
        requestEntity.setHeadOfPracticeId(Integer.valueOf(requestViewModel.getAccountid()));
        return requestEntity;
    }
}
