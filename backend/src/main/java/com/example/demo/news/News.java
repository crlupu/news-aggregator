package com.example.demo.news;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Entity
@Setter
@Getter
public class News {

    @Id
    @GeneratedValue
    private Long id;

    @NotBlank
    private String topic;

    @Column(columnDefinition = "TEXT")
    private String articleText;

    @NotBlank
    @Column(unique = true)
    private String title;

    @NotBlank
    private String source;

    @NotBlank
    private String imageUrl;

}
