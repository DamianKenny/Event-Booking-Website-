package com.example.BookingService.controller;

import com.example.BookingService.dto.BookingRequest;
import com.example.BookingService.entity.Booking;
import com.example.BookingService.service.BookingService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookings")
@RequiredArgsConstructor
public class BookingController {
    private final BookingService bookingService;

    //get booking by bookingid
    @GetMapping("/{id}")
    public ResponseEntity<?> getBookingById(@PathVariable Long id) {
        Booking booking = bookingService.getBookingById(id);
        return ResponseEntity.ok(booking);
    }

    //get booking by userid
    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getUserBookings(@PathVariable Long userId) {
        List<Booking> bookings = bookingService.getUserBookings(userId);
        if (bookings.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("No bookings found for user with ID " + userId);
        }
        return ResponseEntity.ok(bookings);
    }

    //create booking
    @PostMapping
    public ResponseEntity<?> createBooking(@Valid @RequestBody BookingRequest request) {
        try {
            Booking booking = bookingService.createBooking(request);
            return ResponseEntity.status(HttpStatus.CREATED).body(booking);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    //get booking by eventid
    @GetMapping("/event/{eventId}")
    public ResponseEntity<?> getBookingByEventId(@PathVariable Long eventId) {
        List<Booking> bookings = bookingService.getAttendeesByEventId(eventId);
        return ResponseEntity.ok(bookings);
    }

    //delete by id
    @DeleteMapping("/{id}")
    public ResponseEntity<String> cancelBooking(@PathVariable Long id) {
        return bookingService.cancelBooking(id);
    }
}