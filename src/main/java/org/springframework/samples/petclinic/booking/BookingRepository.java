package org.springframework.samples.petclinic.booking;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface BookingRepository extends CrudRepository<Booking, Integer> {
    
    List<Booking> findAll();

}
