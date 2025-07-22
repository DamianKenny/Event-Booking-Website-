package com.example.UserService.controller;

import com.example.UserService.dto.LoginRequest;
import com.example.UserService.dto.UserResponse;
import com.example.UserService.entity.User;
import com.example.UserService.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    // Register a new user
    @PostMapping("/users/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        String validationMessage = userService.validateUserRegistration(user);
        if (validationMessage != null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(validationMessage);
        }
        User registeredUser = userService.registerUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(new UserResponse(registeredUser));
    }

    // User login
    @PostMapping("/users/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest) {
        User user = userService.loginUser(loginRequest.getEmail(), loginRequest.getPassword());
        if (user == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password.");
        }
        return ResponseEntity.ok(new UserResponse(user));
    }

    // Get all users
    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsers() {
        List<User> users = userService.getAllUsers();
        if (users.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(users);
    }

    // Get a user by ID
    @GetMapping("/users/{id}")
    public ResponseEntity<?> getUserById(@PathVariable Long id) {
        User user = userService.getUserById(id);
        if (user == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User with ID " + id + " does not exist.");
        }
        return ResponseEntity.ok(new UserResponse(user));
    }

    // Update user details
    @PutMapping("/users/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody User user) {
        String validationMessage = userService.validateUserUpdate(id, user);
        if (validationMessage != null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(validationMessage);
        }
        User updatedUser = userService.updateUser(id, user);
        return ResponseEntity.ok(new UserResponse(updatedUser));
    }

    // Delete a user
    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        String validationMessage = userService.validateUserDeletion(id);
        if (validationMessage != null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(validationMessage);
        }
        userService.deleteUser(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("User deleted successfully.");
    }
}
