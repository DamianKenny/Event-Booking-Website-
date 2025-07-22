package com.example.BookingService.service;

import com.example.BookingService.dto.EventDetails;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;

@FeignClient(
        name = "event-service",
        url = "${event.service.url:http://localhost:8081}",
        path = "/rest-app",
        fallback = EventServiceClientFallback.class
)
public interface EventServiceClient {
    @PutMapping("/events/{eventId}/reserve")
    ResponseEntity<Void> reserveSeat(@PathVariable Long eventId);

    @GetMapping("/events/{eventId}")
    ResponseEntity<EventDetails> getEventDetails(@PathVariable Long eventId);
}