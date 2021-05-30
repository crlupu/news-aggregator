package com.example.demo.news;

import com.example.demo.user.User;
import com.example.demo.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;

@CrossOrigin
@RestController
public class NewsController {
    @Autowired
    private NewsRepository newsRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping(value = "/news")
    public ResponseEntity<List<News>> getPaginatedNews(@RequestParam("page") int page,
                                                       @RequestParam("size") int size,
                                                       @RequestParam(required = false) String[] sources,
                                                       @RequestParam(required = false) String[] topics) {
        try {
            Pageable paging = PageRequest.of(page, size);
            List<News> news;
            if (sources != null) {
                news = newsRepository.findAllBySourceInOrderByIdDesc(new HashSet<>(Arrays.asList(sources)),
                        paging).getContent();
            } else if (topics != null) {
                news = newsRepository.findAllByTopicInOrderByIdDesc(new HashSet<>(Arrays.asList(topics)),
                        paging).getContent();
            } else {
                news = newsRepository.findAllByOrderByIdDesc(paging).getContent();
            }

            return new ResponseEntity<>(news, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping(value = "/news/{id}")
    public ResponseEntity<String> deleteNews(@PathVariable long id, @RequestParam long userId) {
        User user = userRepository.findById(userId).orElse(null);
        if (user == null) {
            return new ResponseEntity<>("User not found", HttpStatus.BAD_REQUEST);
        } else if (!user.getRole().equalsIgnoreCase("admin")) {
            return new ResponseEntity<>("User doesn't have admin rights", HttpStatus.METHOD_NOT_ALLOWED);
        } else {
            News news = newsRepository.findById(id).orElse(null);

            if (news == null) {
                return new ResponseEntity<>("News not found", HttpStatus.BAD_REQUEST);
            } else {
                newsRepository.deleteById(id);
                return new ResponseEntity<>("News successfully deleted", HttpStatus.OK);
            }
        }

    }
}
