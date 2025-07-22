package com.example.BookingService.service;

import com.example.BookingService.dto.BookingRequest;
import com.example.BookingService.dto.EventDetails;
import com.example.BookingService.entity.Booking;
import com.example.BookingService.exception.BookingNotFoundException;
import com.example.BookingService.repository.BookingRepository;
import feign.FeignException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class BookingService {
    private static final Logger logger = LoggerFactory.getLogger(BookingService.class);

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private EventServiceClient eventServiceClient;

    @Transactional
    public Booking createBooking(BookingRequest request) {
        try {
            // 1. Get event details to check available seats
            ResponseEntity<EventDetails> eventResponse = eventServiceClient.getEventDetails(request.getEventId());

            if (!eventResponse.getStatusCode().is2xxSuccessful() || eventResponse.getBody() == null) {
                throw new IllegalArgumentException("Event not found with ID: " + request.getEventId());
            }

            Integer availableSeats = eventResponse.getBody().getAvailableSeats();
            if (availableSeats == null || availableSeats <= 0) {
                throw new IllegalArgumentException("No available seats for event ID: " + request.getEventId());
            }

            // 2. Reserve a seat for the event
            ResponseEntity<Void> reserveResponse = eventServiceClient.reserveSeat(request.getEventId());
            if (!reserveResponse.getStatusCode().is2xxSuccessful()) {
                throw new RuntimeException("Failed to reserve seat for event ID: " + request.getEventId());
            }

            // 3. Create the booking record
            Booking booking = new Booking();
            booking.setUserId(request.getUserId());
            booking.setEventId(request.getEventId());

            return bookingRepository.save(booking);

        } catch (FeignException e) {
            logger.error("Error communicating with event service", e);
            throw new RuntimeException("Error communicating with event service: " + e.getMessage());
        }
    }

    public ResponseEntity<String> cancelBooking(Long id) {
        // 4. Find the booking by ID and delete it
        Booking booking = bookingRepository.findById(id).orElseThrow(() ->
                new BookingNotFoundException("Booking not found with ID: " + id));

        // Delete the booking from the repository
        bookingRepository.delete(booking);

        // Return a response indicating the booking has been canceled successfully
        return ResponseEntity.ok("Booking canceled successfully.");
    }

    public List<Booking> getUserBookings(Long userId) {
        // 5. Retrieve all bookings for a given user
        return bookingRepository.findByUserId(userId);
    }

    public List<Booking> getAttendeesByEventId(Long eventId) {
        // 6. Validate the event ID before querying null or not
        if (eventId == null || eventId <= 0) {
            throw new IllegalArgumentException("Invalid event ID");
        }

        // Retrieve all bookings for the specified event
        List<Booking> bookings = bookingRepository.findByEventId(eventId);

        // exception
        if (bookings.isEmpty()) {
            throw new BookingNotFoundException("No bookings found for event ID: " + eventId);
        }

        return bookings;
    }

    public Booking getBookingById(Long id) {
        // 7. Find the booking by ID and return it, or throw an exception if not found
        return bookingRepository.findById(id)
                .orElseThrow(() -> new BookingNotFoundException("Booking not found with ID: " + id));
    }
}
