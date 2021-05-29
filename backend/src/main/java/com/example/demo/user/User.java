package com.example.demo.user;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import java.util.Objects;

@Entity
@Table (name = "users")
@NoArgsConstructor
@Getter @Setter
public class User {
    @Id
    @GeneratedValue
    private long id;

    @NotBlank
    private String email;

    @NotBlank
    private String password;

    @NotBlank
    private String name;

    @NotBlank
    private boolean isLoggedIn;

    public User(String email, String password) {
        this.email = email;
        this.password = password;
        this.isLoggedIn = false;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, email, password, isLoggedIn);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) return true;
        if (!(obj instanceof User)) return false;
        User user = (User) obj;
        return Objects.equals(email, user.email) &&
                Objects.equals(password, user.password);
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", isLoggedIn=" + isLoggedIn +
                '}';
    }
}
