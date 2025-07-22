package com.example.EventService.service;

import com.example.EventService.entity.Event;
import com.example.EventService.repository.EventRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class EventService {

    private final EventRepository eventRepository;

    public EventService(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    // Get all upcoming events
    public List<Event> getAllUpcomingEvents() {
        return eventRepository.findByDateAfter(java.time.LocalDateTime.now());
    }

    // Get Event by ID
    public Optional<Event> getEventById(Long id) {
        return eventRepository.findById(id);
    }

    // Create Event
    public Event createEvent(Event event) {
        if (event.getAvailableSeats() > event.getTotalSeats()) {
            throw new IllegalArgumentException("Available seats cannot exceed total seats");
        }
        return eventRepository.save(event);
    }

    // Update Event
    public Event updateEvent(Long id, Event eventDetails) {
        Event existingEvent = eventRepository.findById(id).orElse(null);

        if (existingEvent == null) {
            return null;
        }

        existingEvent.setTitle(eventDetails.getTitle());
        existingEvent.setDescription(eventDetails.getDescription());
        existingEvent.setDate(eventDetails.getDate());
        existingEvent.setLocation(eventDetails.getLocation());
        existingEvent.setOrganizerId(eventDetails.getOrganizerId());
        existingEvent.setTotalSeats(eventDetails.getTotalSeats());
        existingEvent.setAvailableSeats(eventDetails.getAvailableSeats());

        return eventRepository.save(existingEvent);
    }

    // Delete Event
    public boolean deleteEvent(Long id) {
        if (!eventRepository.existsById(id)) {
            return false;
        }
        eventRepository.deleteById(id);
        return true;
    }

    // Reserve Seat
    @Transactional
    public boolean reserveSeat(Long eventId) {
        Event event = eventRepository.findById(eventId).orElse(null);

        if (event == null || event.getAvailableSeats() <= 0) {
            return false;
        }

        event.setAvailableSeats(event.getAvailableSeats() - 1);
        eventRepository.save(event);
        return true;
    }
}
