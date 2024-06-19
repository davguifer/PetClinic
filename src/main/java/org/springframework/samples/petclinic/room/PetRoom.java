package org.springframework.samples.petclinic.room;

import org.springframework.samples.petclinic.clinic.Clinic;
import org.springframework.samples.petclinic.model.NamedEntity;
import org.springframework.samples.petclinic.pet.PetType;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "rooms")
@Getter
@Setter
public class PetRoom extends NamedEntity {

    @ManyToOne(optional = false)
    private PetType petType;

    @ManyToOne(optional = false)
    private Clinic clinic;

    @NotNull
    @Positive
    private Integer size;

}
