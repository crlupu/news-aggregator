package com.example.demo.scrapper;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class Source {
    private String URL;
    private String linksSelector;
    private String textBlocksSelector;
    private String imageSelector;
    private String titleSelector;
    private String title;
    private String topic;
    private String linkPrefix;
}
