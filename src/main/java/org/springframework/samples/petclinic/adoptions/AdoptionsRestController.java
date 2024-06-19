package org.springframework.samples.petclinic.adoptions;

import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.auth.payload.response.MessageResponse;
import org.springframework.samples.petclinic.clinic.Clinic;
import org.springframework.samples.petclinic.consultation.Consultation;
import org.springframework.samples.petclinic.owner.Owner;
import org.springframework.samples.petclinic.owner.OwnerService;
import org.springframework.samples.petclinic.pet.Pet;
import org.springframework.samples.petclinic.pet.PetService;
import org.springframework.samples.petclinic.util.RestPreconditions;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/v1/adoptions")
@SecurityRequirement(name = "bearerAuth")
public class AdoptionsRestController {

    private final PetService petService;
    private final AdoptionsService adoptionsService;
    private final OwnerService ownerService;

    @Autowired
    public AdoptionsRestController(PetService petService,AdoptionsService adoptionsService,OwnerService ownerService) {
        this.petService = petService;
        this.adoptionsService = adoptionsService;
        this.ownerService = ownerService;
    }

    @GetMapping
    public ResponseEntity<Iterable<Adoptions>> findAllAdoptions() {
        return new ResponseEntity<>((Iterable<Adoptions>) adoptionsService.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "{adoptionId}")
    public ResponseEntity<Adoptions> findById(@PathVariable("adoptionId") Integer adoptionId) {
        return new ResponseEntity<>(adoptionsService.findById(adoptionId), HttpStatus.OK);
    }

    @GetMapping(value = "/owner/{ownerId}")
    public ResponseEntity<List<Adoptions>> findConsultationsByOwnerId(@PathVariable("ownerId") int ownerId) {
        RestPreconditions.checkNotNull(ownerService.findOwnerById(ownerId), "owner", "id", ownerId);
        return new ResponseEntity<>(adoptionsService.findConsultatiosByOwnerId(ownerId), HttpStatus.OK);
    }

    @PostMapping(value = "/new")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Adoptions> create(@RequestBody @Valid Adoptions adoptions) throws URISyntaxException {
        return new ResponseEntity<>(adoptionsService.create(adoptions), HttpStatus.CREATED);
    }

    @PutMapping(value = "{adoptionId}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Adoptions> update(@RequestBody @Valid Adoptions adoptions, @PathVariable("adoptionId") int adoptionId) throws URISyntaxException {
        RestPreconditions.checkNotNull(adoptionsService.findById(adoptionId), "adoptions", "id", adoptionId);
        return new ResponseEntity<>(adoptionsService.update(adoptions), HttpStatus.CREATED);
    }

    @DeleteMapping(value = "{adoptionId}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<MessageResponse> delete(@PathVariable("adoptionId") int adoptionId) {
        RestPreconditions.checkNotNull(adoptionsService.findById(adoptionId), "adoptions", "id", adoptionId);
        adoptionsService.delete(adoptionId);
        return new ResponseEntity<>(new MessageResponse("Adoption deleted!"), HttpStatus.OK);
    }

    public Pet changePetOwner(Pet pet,Owner adopter){
        pet.setOwner(adopter);
        petService.savePet(pet);
        return pet;
    }
   

}
