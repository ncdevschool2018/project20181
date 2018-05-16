package by.netcracker.services;

import by.netcracker.entities.RequestEntity;
import java.util.List;

public interface RequestService {
    List<RequestEntity> findAllRequests();
    List<RequestEntity> findAllRequestsByAvailable();
    RequestEntity findOneRequest(Integer idRequest);
    void addRequest(RequestEntity requestEntity);
    void deleteRequestList(List<RequestEntity> requestEntities);
    void deleteRequestById(Integer idRequest);

    List<RequestEntity> requestEntitiesAfterCurentDate();
}
