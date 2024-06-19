package org.springframework.samples.petclinic.booking;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.time.LocalDate;
import java.util.Collection;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.dao.DataAccessException;
import org.springframework.samples.petclinic.exceptions.ResourceNotFoundException;
import org.springframework.samples.petclinic.pet.Pet;
import org.springframework.samples.petclinic.pet.PetService;
import org.springframework.samples.petclinic.pet.exceptions.DuplicatedPetNameException;
import org.springframework.samples.petclinic.room.PetRoom;
import org.springframework.samples.petclinic.room.PetRoomService;
import org.springframework.samples.petclinic.util.EntityUtils;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@AutoConfigureTestDatabase
public class BookingServiceTest {

    @Autowired
	protected BookingService bookingService;

	@Autowired
	protected PetService petService;

	@Autowired
	protected PetRoomService petRoomService;

	//Test para probar el método findAllBookings
    @Test
	void shouldFindAllBookings() {
		Collection<Booking> bookings = (Collection<Booking>) this.bookingService.findAllBookings();

		Booking v1 = EntityUtils.getById(bookings, Booking.class, 1);
		assertEquals(1, v1.getPet().getId());
		Booking v3 = EntityUtils.getById(bookings, Booking.class, 3);
		assertEquals(3, v3.getId());
	}

	//Test para probar el método findBookingById
	@Test
	void shouldFindBookingById() {
		Booking booking = this.bookingService.findBookingById(1);
		assertEquals(booking.getId(), 1);
	}

	//Test para probar el método findBookingById (en el caso en el que no exista booking con la id buscada)
	@Test
	void shouldNotFindBookingWithIncorrectId() {
		assertThrows(ResourceNotFoundException.class, () -> this.bookingService.findBookingById(700));
	}

	//Test para probar el método save
	@Test
	@Transactional
	void shouldInsertBooking() {
		//Recogemos todas las bookings existentes
		Collection<Booking> bookings = (Collection<Booking>) this.bookingService.findAllBookings();
		int found = bookings.size();

		Booking booking = new Booking();
		//Para asignarle un Pet primero tenemos que conseguir uno previamente
		Pet pet = petService.findPetById(1);

		booking.setPet(pet);

		//Para poder asignarle una PetRoom tenemos que conseguir una previamente
		PetRoom petRoom = petRoomService.findPetRoomById(1);
		booking.setPetRoom(petRoom);

		booking.setStartDate(LocalDate.of(2024, 07, 05));
		booking.setEndDate(LocalDate.of(2024, 07, 13));
	
		
		this.bookingService.save(booking);

		bookings = (Collection<Booking>) this.bookingService.findAllBookings();
		assertEquals(found + 1, bookings.size());
	}

	//Test para probar el método update
	@Test
	@Transactional
	void shouldUpdateBooking() {
		Booking booking = this.bookingService.findBookingById(1);
		booking.setEndDate(LocalDate.of(2024, 06, 03));
		bookingService.update(booking, 1);
		booking = this.bookingService.findBookingById(1);
		assertEquals(LocalDate.of(2024, 06, 03), booking.getEndDate());
	}

	//Test para probar el método delete
	@Test
	@Transactional
	void shouldDeleteBooking() throws DataAccessException, DuplicatedPetNameException {
		int initialCount = ((Collection<Booking>) this.bookingService.findAllBookings()).size();

		//Creamos una booking para eliminarla posteriormente
		Booking booking = new Booking();

		//Para asignarle un Pet primero tenemos que conseguir uno previamente
		Pet pet = petService.findPetById(10);

		booking.setPet(pet);

		//Para poder asignarle una PetRoom tenemos que conseguir una previamente
		PetRoom petRoom = petRoomService.findPetRoomById(2);
		booking.setPetRoom(petRoom);

		booking.setStartDate(LocalDate.of(2024, 07, 05));
		booking.setEndDate(LocalDate.of(2024, 07, 13));

		this.bookingService.save(booking);

		Integer secondCount = ((Collection<Booking>) this.bookingService.findAllBookings()).size();
		assertEquals(initialCount + 1, secondCount);
		bookingService.delete(booking.getId());
		Integer lastCount = ((Collection<Booking>) this.bookingService.findAllBookings()).size();
		assertEquals(initialCount, lastCount);
	}


}
