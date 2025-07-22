package com.example.UserService.service;

import com.example.UserService.entity.User;
import com.example.UserService.repository.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    // Fetch all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Fetch a user by ID
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    // Register a new user
    public User registerUser(User user) {
        return userRepository.save(user);
    }

    // Login a user
    public User loginUser(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password).orElse(null);
    }

    // Validate user registration
    public String validateUserRegistration(User user) {
        if (existsByEmail(user.getEmail())) {
            return "A user with this email already exists.";
        }
        return null;
    }

    // Validate user update
    public String validateUserUpdate(Long id, User updatedUser) {
        Optional<User> existingUser = userRepository.findById(id);
        if (existingUser.isEmpty()) {
            return "User with ID " + id + " does not exist.";
        }
        return null;
    }

    // Validate user deletion
    public String validateUserDeletion(Long id) {
        Optional<User> existingUser = userRepository.findById(id);
        if (existingUser.isEmpty()) {
            return "User with ID " + id + " does not exist.";
        }
        return null;
    }

    // Update user details
    @Transactional
    public User updateUser(Long id, User updatedUser) {
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found"));

        existingUser.setName(updatedUser.getName());
        existingUser.setEmail(updatedUser.getEmail());

        if (updatedUser.getPassword() != null && !updatedUser.getPassword().isEmpty()) {
            existingUser.setPassword(updatedUser.getPassword());
        }

        return userRepository.save(existingUser);
    }

    // Delete a user
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }
}
