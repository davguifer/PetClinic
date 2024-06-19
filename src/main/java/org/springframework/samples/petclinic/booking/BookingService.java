package org.springframework.samples.petclinic.booking;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.petclinic.exceptions.ResourceNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class BookingService {
    
    private BookingRepository bookingRepository;

    @Autowired
    public BookingService(BookingRepository vookingRepository){
        this.bookingRepository = vookingRepository;
    }

    @Transactional
    public Booking save(Booking booking){
        return bookingRepository.save(booking);
    }

    @Transactional(readOnly = true)
    public List<Booking> findAllBookings(){
        return bookingRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Booking findBookingById(Integer id){
        return bookingRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("booking", "ID", id));
    }

    @Transactional
    public void delete(Integer id){
        bookingRepository.deleteById(id);
    }

    @Transactional
    public Booking update(Booking booking, Integer id){
        Booking bookingToUpdate = bookingRepository.findById(id).orElseThrow();
        BeanUtils.copyProperties(booking, bookingToUpdate, "id");
        return bookingRepository.save(bookingToUpdate);
    }

}
