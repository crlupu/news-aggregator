package com.example.demo.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;

    @PostMapping("/users/register")
    public Status registerUser(@Valid @RequestBody User newUser) {
        List<User> users = userRepository.findAll();

        for (User user : users) {
            if (user.equals(newUser)) {
                return Status.USER_ALREADY_EXISTS;
            }
        }

        userRepository.save(newUser);
        return Status.SUCCESS;
    }

    @PostMapping("/users/login")
    public Status loginUser(@Valid @RequestBody User user) {
        List<User> users = userRepository.findAll();
        for (User other : users) {
            if (other.equals(user)) {
                other.setLoggedIn(true);
                userRepository.save(other);
                return Status.SUCCESS;
            }
        }
        return Status.FAILURE;
    }

    @PostMapping("/users/logout")
    public Status logUserOut(@Valid @RequestBody User user) {
        List<User> users = userRepository.findAll();
        for (User other : users) {
            if (other.equals(user)) {
                user.setLoggedIn(false);
                userRepository.save(user);
                return Status.SUCCESS;
            }
        }
        return Status.FAILURE;
    }

    @PatchMapping("/users/{id}")
    public void updateUser(@PathVariable Long id,
                           @Valid @RequestBody User newUser) {
        userRepository.findById(id)
                .map(user -> {
                    user.setFirstName(newUser.getFirstName().equals("") ? "" : newUser.getFirstName());
                    user.setLastName(newUser.getLastName().equals("") ? "" : newUser.getLastName());
                    user.setEmail(newUser.getEmail().equals("") ? "" : newUser.getEmail());
                    user.setPassword(newUser.getPassword().equals("") ? "" : newUser.getPassword());
                    user.setPhoneNumber(newUser.getPhoneNumber().equals("") ? "" : newUser.getPhoneNumber());
                    return userRepository.save(user);
                })
                .orElseGet(() -> {
                    newUser.setId(id);
                    return userRepository.save(newUser);
                });
    }
}
