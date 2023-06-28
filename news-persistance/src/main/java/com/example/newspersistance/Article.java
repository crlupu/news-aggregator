package com.example.newspersistance;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Objects;

@Entity
public class Article {
    @Id
    @GeneratedValue
    private Long id;

    private String author;
    private String title;
    private String text;
    private String category;


    public Article() {
    }

    public Article(String author, String title, String text, String category) {
        this.author = author;
        this.title = title;
        this.text = text;
        this.category = category;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Article article = (Article) o;
        return Objects.equals(id, article.id)
                && Objects.equals(author, article.author) && Objects.equals(title, article.title)
                && Objects.equals(text, article.text) && Objects.equals(category, article.category);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, author, title, text, category);
    }

    @Override
    public String toString() {
        return "Article{" +
                "id=" + id +
                ", author='" + author + '\'' +
                ", title='" + title + '\'' +
                ", text='" + text + '\'' +
                ", category='" + category + '\'' +
                '}';
    }
}
