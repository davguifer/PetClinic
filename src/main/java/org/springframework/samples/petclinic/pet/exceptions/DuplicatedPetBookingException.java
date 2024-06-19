package org.springframework.samples.petclinic.pet.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class DuplicatedPetBookingException extends RuntimeException{
	
	public DuplicatedPetBookingException() {
		super("Same pet can't have two concurrent bookings.");
	}
    
}
