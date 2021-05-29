package com.example.demo.scrapper;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

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
