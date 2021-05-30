package com.example.demo.news;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class NewsController {
    @Autowired
    private NewsRepository newsRepository;

    @GetMapping(value = "/news")
    public ResponseEntity<List<News>> getPaginatedNews(@RequestParam("page") int page,
                                                       @RequestParam("size") int size,
                                                       @RequestParam(required = false) String source) {
        try {
            Pageable paging = PageRequest.of(page, size);
            List<News> news;
            if(source == null) {
                news = newsRepository.findAll(paging).getContent();
            } else {
                news = newsRepository.findBySource(source, paging).getContent();
            }
            return new ResponseEntity<>(news, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
