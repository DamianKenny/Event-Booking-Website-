package com.example.EventService.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "events")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Title is required")
    private String title;

    @NotBlank(message = "Description is required")
    private String description;

    @NotNull(message = "Date is required")
    private LocalDateTime date;

    @NotBlank(message = "Location is required")
    private String location;

    @NotNull(message = "Organizer ID is required")
    @Column(name = "organizer_id")
    private String organizerId;

    @NotNull(message = "Total seats is required")
    @Column(name = "total_seats")
    private Long totalSeats;

    @NotNull(message = "Available seats is required")
    @Column(name = "available_seats")
    private Long availableSeats;

}
