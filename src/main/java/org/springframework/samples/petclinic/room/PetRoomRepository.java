package org.springframework.samples.petclinic.room;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface PetRoomRepository extends CrudRepository<PetRoom, Integer> {
    
    List<PetRoom> findAll();

}
