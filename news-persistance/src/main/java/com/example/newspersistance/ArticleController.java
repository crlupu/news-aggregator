package com.example.newspersistance;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ArticleController {
    private final ArticleRepository articleRepository;

    public ArticleController(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @GetMapping("/articles")
    List<Article> all() {
        return articleRepository.findAll();
    }

    @PostMapping("/articles")
    Article newArticle(@RequestBody Article article) {
        return articleRepository.save(article);
    }
}
