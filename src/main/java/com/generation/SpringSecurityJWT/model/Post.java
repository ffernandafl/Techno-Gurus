package com.generation.SpringSecurityJWT.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;



import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private Integer id_post;

    @Column(nullable = true, length = 255)
    private String title;

    @Column(columnDefinition = "text")
    private String body;

    @Column(nullable=true)
    private Integer id_post_krush;

    @ManyToOne
    @JsonProperty(access = Access.WRITE_ONLY)
    private User user;

    public Integer getId_post() {
        return id_post;
    }

    public void setId_post(Integer id_post) {
        this.id_post = id_post;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public Integer getId_post_krush() {
        return id_post_krush;
    }

    public void setId_post_krush(Integer id_post_krush) {
        this.id_post_krush = id_post_krush;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
