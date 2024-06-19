package org.springframework.samples.petclinic.room;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.petclinic.exceptions.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PetRoomService {
    
    private PetRoomRepository petRoomRepository;

    @Autowired
    public PetRoomService(PetRoomRepository petRoomRepository){
        this.petRoomRepository = petRoomRepository;
    }

    @Transactional
    public PetRoom save(PetRoom petRoom){
        return petRoomRepository.save(petRoom);
    }

    @Transactional(readOnly = true)
    public List<PetRoom> findAllPetRooms(){
        return petRoomRepository.findAll();
    }

    @Transactional(readOnly = true)
    public PetRoom findPetRoomById(Integer id){
        return petRoomRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("petRoom", "ID", id));
    }

    @Transactional
    public void delete(Integer id){
        petRoomRepository.deleteById(id);
    }

    @Transactional
    public PetRoom update(PetRoom room, Integer id){
        PetRoom roomToUpdate = petRoomRepository.findById(id).orElseThrow();
        BeanUtils.copyProperties(room, roomToUpdate, "id");
        return petRoomRepository.save(roomToUpdate);
    }

}
