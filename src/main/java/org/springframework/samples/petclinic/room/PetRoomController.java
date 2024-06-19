package org.springframework.samples.petclinic.room;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.auth.payload.response.MessageResponse;
import org.springframework.samples.petclinic.util.RestPreconditions;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;

@RestController
@RequestMapping("api/v1/rooms")
@Tag(name = "Pet Hotel Rooms", description = "The Pet Hotel Room management API")
@SecurityRequirement(name = "bearerAuth")
public class PetRoomController {

    private final PetRoomService petRoomService;

    @Autowired
    public PetRoomController(PetRoomService petRoomService){
        this.petRoomService = petRoomService;
    }

    @GetMapping
    public ResponseEntity<List<PetRoom>> findAll(){
        List<PetRoom> res = petRoomService.findAllPetRooms();
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<PetRoom> findPetRoomById(@PathVariable("id") int id) {
        return new ResponseEntity<>(petRoomService.findPetRoomById(id), HttpStatus.OK);
    }

    public ResponseEntity<PetRoom> create(@RequestBody @Valid PetRoom room){
        PetRoom res = petRoomService.save(room);
        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<MessageResponse> deletePetRoom(@PathVariable("id") int id) {
        RestPreconditions.checkNotNull(petRoomService.findPetRoomById(id), "PetRoom", "ID", id);
        petRoomService.delete(id);
        return new ResponseEntity<>(new MessageResponse("Room deleted!"), HttpStatus.OK);
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<PetRoom> updatePetRoom(@PathVariable("id") int id, @RequestBody @Valid PetRoom room) {
        RestPreconditions.checkNotNull(petRoomService.findPetRoomById(id), "PetRoom", "ID", id);
        PetRoom res = petRoomService.update(room, id);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<PetRoom> createPetRoom(@RequestBody @Valid PetRoom room) {
        PetRoom newRoom = new PetRoom();
        BeanUtils.copyProperties(room, newRoom, "id");
        return new ResponseEntity<>(petRoomService.save(newRoom), HttpStatus.CREATED);
    }

}
