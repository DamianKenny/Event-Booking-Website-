package com.example.BookingService.service;

import com.example.BookingService.dto.EventDetails;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public class EventServiceClientFallback implements EventServiceClient {
    @Override
    public ResponseEntity<Void> reserveSeat(Long eventId) {
        throw new RuntimeException("Event service unavailable - cannot reserve seat");
    }

    @Override
    public ResponseEntity<EventDetails> getEventDetails(Long eventId) {
        EventDetails details = new EventDetails();
        details.setAvailableSeats(0);
        return ResponseEntity.ok(details);
    }
}