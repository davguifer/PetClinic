package org.springframework.samples.petclinic.booking;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.samples.petclinic.model.BaseEntity;
import org.springframework.samples.petclinic.pet.Pet;
import org.springframework.samples.petclinic.room.PetRoom;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "bookings")
@Getter
@Setter
public class Booking extends BaseEntity {

    @NotNull
	@DateTimeFormat(pattern = "yyyy/MM/dd")
	private LocalDate startDate;

    @NotNull
    @DateTimeFormat(pattern = "yyyy/MM/dd")
	private LocalDate endDate;
    
    @ManyToOne(optional = false)
    private Pet pet;

    @ManyToOne(optional = false)
    private PetRoom petRoom;

}