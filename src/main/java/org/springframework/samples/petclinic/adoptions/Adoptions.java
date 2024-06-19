package org.springframework.samples.petclinic.adoptions;

import org.hibernate.validator.constraints.Length;
import org.springframework.samples.petclinic.model.BaseEntity;
import org.springframework.samples.petclinic.owner.Owner;
import org.springframework.samples.petclinic.pet.Pet;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "adoptions")
public class Adoptions extends BaseEntity{
    
   @ManyToOne(optional = false)
    @JoinColumn(name = "owner_id")
    private Owner owner;

    @ManyToOne(optional = false)
    @JoinColumn(name = "pet_id")
    private Pet pet;
    
    private String description;

    @ManyToOne(optional = true)
    @JoinColumn(name = "adopter_id")
    private Owner adopter;

    @Length(min=1, max=255)
    private String application;

    @Column(name = "is_accepted")
    @NotNull
    private Boolean isAccepted = false;
    
    
}
