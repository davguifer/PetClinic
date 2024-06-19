package org.springframework.samples.petclinic.booking;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.auth.payload.response.MessageResponse;
import org.springframework.samples.petclinic.pet.exceptions.DuplicatedPetBookingException;
import org.springframework.samples.petclinic.pet.exceptions.DuplicatedPetRoomBookingException;
import org.springframework.samples.petclinic.pet.exceptions.InconsistentDatesException;
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
@RequestMapping("api/v1/bookings")
@Tag(name = "Bookings", description = "The Bookings management API")
@SecurityRequirement(name = "bearerAuth")
public class BookingController {

    private final BookingService bookingService;

    @Autowired
    public BookingController(BookingService bookingService){
        this.bookingService = bookingService;
    }

    @GetMapping
    public ResponseEntity<List<Booking>> findAll(){
        List<Booking> res = bookingService.findAllBookings();
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping(value = "{id}")
    public ResponseEntity<Booking> findBookingById(@PathVariable("id") int id) {
        return new ResponseEntity<>(bookingService.findBookingById(id), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Booking> createBooking(@RequestBody @Valid Booking booking) {
        if(booking.getStartDate().isAfter(booking.getEndDate()) || booking.getStartDate().isBefore(LocalDate.now())){
            throw new InconsistentDatesException();
        }
        List<Booking> bookings = bookingService.findAllBookings();
        if(bookings.stream().filter(b -> b.getPetRoom().getId().equals(booking.getPetRoom().getId()))
        .anyMatch(b -> (b.getStartDate().isAfter(booking.getStartDate()) ? b.getStartDate() : booking.getStartDate())
        .isBefore(b.getEndDate().isBefore(booking.getEndDate()) ? b.getEndDate() : booking.getEndDate()))){
            throw new DuplicatedPetRoomBookingException();
        }
        if(bookings.stream().filter(b -> b.getPet().getId().equals(booking.getPet().getId()) &&
        b.getPetRoom().getClinic().getId().equals(booking.getPetRoom().getClinic().getId()))
        .anyMatch(b -> (b.getStartDate().isAfter(booking.getStartDate()) ? b.getStartDate() : booking.getStartDate())
        .isBefore(b.getEndDate().isBefore(booking.getEndDate()) ? b.getEndDate() : booking.getEndDate()))){
            throw new DuplicatedPetBookingException();  
        }
        Booking newBooking = new Booking();
        BeanUtils.copyProperties(booking, newBooking, "id");
        return new ResponseEntity<>(bookingService.save(newBooking), HttpStatus.CREATED);
    }

    @DeleteMapping(value = "{id}")
    public ResponseEntity<MessageResponse> deleteBooking(@PathVariable("id") int id) {
        RestPreconditions.checkNotNull(bookingService.findBookingById(id), "Booking", "ID", id);
        bookingService.delete(id);
        return new ResponseEntity<>(new MessageResponse("Booking deleted!"), HttpStatus.OK);
    }

    @PutMapping(value = "{id}")
    public ResponseEntity<Booking> updateBooking(@PathVariable("id") int id, @RequestBody @Valid Booking booking) {
        RestPreconditions.checkNotNull(bookingService.findBookingById(id), "Booking", "ID", id);
        Booking res = bookingService.update(booking, id);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

}
