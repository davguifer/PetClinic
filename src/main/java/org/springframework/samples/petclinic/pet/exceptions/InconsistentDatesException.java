package org.springframework.samples.petclinic.pet.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class InconsistentDatesException extends RuntimeException{
	
	public InconsistentDatesException() {
		super("Start date must be before end date and today.");
	}
    
}
