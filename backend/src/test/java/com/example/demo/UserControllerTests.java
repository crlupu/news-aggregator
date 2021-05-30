package com.example.demo;

import com.example.demo.user.User;
import com.example.demo.user.UserController;
import com.example.demo.user.UserRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.times;

@SpringBootTest
public class UserControllerTests {

    @Mock
    UserRepository userRepository;

    @Mock
    UserController userController;

    @Test
    void registerUser_ShouldRegisterUser_WhenRequestBodyIsCorrect() {
        User user = new User(1L,"user@email.com", "password", "first name", "last name", false, "123456789", "user");
        Mockito.when(userRepository.findAll()).thenReturn(new ArrayList<User>());
        Mockito.when(userRepository.save(user)).thenReturn(user);
        userController.registerUser(user);

        Mockito.verify(userRepository, times(1)).save(user);
    }
}
