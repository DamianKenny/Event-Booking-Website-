package com.example.EventService.controller;

import com.example.EventService.entity.Event;
import com.example.EventService.service.EventService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/events")
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    // Get all upcoming events
    @GetMapping
    public ResponseEntity<List<Event>> getAllUpcomingEvents() {
        List<Event> events = eventService.getAllUpcomingEvents();
        return events.isEmpty() ? ResponseEntity.status(HttpStatus.NOT_FOUND).body(null) : ResponseEntity.ok(events);
    }

    // Get event by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getEventDetails(@PathVariable Long id) {
        Optional<Event> event = eventService.getEventById(id);
        if (event.isPresent()) {
            return ResponseEntity.ok(event.get());
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body("Event with ID " + id + " does not exist.");
        }
    }

    // Create new event
    @PostMapping
    public ResponseEntity<?> createEvent(@RequestBody Event event) {
        Event savedEvent = eventService.createEvent(event);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedEvent);
    }

    // Update event
    @PutMapping("/{id}")
    public ResponseEntity<?> updateEvent(@PathVariable Long id, @RequestBody Event eventDetails) {
        Event updatedEvent = eventService.updateEvent(id, eventDetails);
        return updatedEvent != null ? ResponseEntity.ok(updatedEvent)
                : ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("Event with ID " + id + " does not exist.");
    }

    // Delete event
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteEvent(@PathVariable Long id) {
        boolean isDeleted = eventService.deleteEvent(id);
        return isDeleted ? ResponseEntity.noContent().build()
                : ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("Event with ID " + id + " does not exist.");
    }

    // Reserve seat
    @PutMapping("/{eventId}/reserve")
    public ResponseEntity<?> reserveSeat(@PathVariable Long eventId) {
        boolean isReserved = eventService.reserveSeat(eventId);
        return isReserved ? ResponseEntity.ok().build()
                : ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .body("No seats available for event: " + eventId);
    }
}
