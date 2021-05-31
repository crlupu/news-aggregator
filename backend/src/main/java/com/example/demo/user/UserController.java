package com.example.demo.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin
@RestController
public class UserController {
    @Autowired
    UserRepository userRepository;

    @CrossOrigin
    @PostMapping("/users/register")
    public ResponseEntity<String> registerUser(@Valid @RequestBody User newUser) {
        List<User> users = userRepository.findAll();
        for (User user : users) {
            if (user.equals(newUser)) {
                return new ResponseEntity<>("{\"response\":\"User already registered\"}", HttpStatus.BAD_REQUEST);
            }
        }

        userRepository.save(newUser);
        return new ResponseEntity<>("{\"response\":\"User successfully added\"}", HttpStatus.OK);
    }

    @PostMapping("/users/login")
    public ResponseEntity<String> loginUser(@Valid @RequestBody User user) {
        List<User> users = userRepository.findAll();
        for (User other : users) {
            if (other.equals(user)) {
                other.setLoggedIn(true);
                userRepository.save(other);
                return new ResponseEntity<>("{\"response\":\"User successfully logged in\"}", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("{\"response\":\"Log in failed\"}", HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/users/logout")
    public ResponseEntity<String> logUserOut(@Valid @RequestBody User user) {
        List<User> users = userRepository.findAll();
        for (User other : users) {
            if (other.equals(user)) {
                user.setLoggedIn(false);
                userRepository.save(user);
                return new ResponseEntity<>("{\"response\":\"User successfully logged out\"}", HttpStatus.OK);
            }
        }
        return new ResponseEntity<>("{\"response\":\"Could not log out user\"}", HttpStatus.BAD_REQUEST);
    }

    @PatchMapping("/users/{id}")
    public ResponseEntity<String> updateUser(@PathVariable Long id, @Valid @RequestBody User newUser) {
        User user = userRepository.findById(id).orElseGet(null);
        if (user != null){
            user.setFirstName(newUser.getFirstName().equals("") ? "" : newUser.getFirstName());
            user.setLastName(newUser.getLastName().equals("") ? "" : newUser.getLastName());
            user.setEmail(newUser.getEmail().equals("") ? "" : newUser.getEmail());
            user.setPassword(newUser.getPassword().equals("") ? "" : newUser.getPassword());
            user.setPhoneNumber(newUser.getPhoneNumber().equals("") ? "" : newUser.getPhoneNumber());
            userRepository.save(user);
        }
        else {
            newUser.setId(id);
            userRepository.save(newUser);
        }
        return new ResponseEntity<>("{\"response\":\"User successfully updated\"}", HttpStatus.OK);
    }
}
