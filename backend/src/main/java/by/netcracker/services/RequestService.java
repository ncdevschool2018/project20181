package by.netcracker.services;

import by.netcracker.entities.RequestEntity;
import java.util.List;

public interface RequestService {
    List<RequestEntity> findAllRequests();
    void addRequest(RequestEntity requestEntity);
}
