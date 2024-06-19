package org.springframework.samples.petclinic.pet.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class DuplicatedPetRoomBookingException extends RuntimeException{
	
	public DuplicatedPetRoomBookingException() {
		super("Same pet room can't have two concurrent bookings.");
	}
    
}
