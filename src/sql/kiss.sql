CREATE DATABASE kiss;

USE kiss;

CREATE TABLE users(
    id_user      BIGINT AUTO_INCREMENT NOT NULL,
    full_name    VARCHAR(255) NOT NULL,
    email        VARCHAR(255) NOT NULL,
    entry_key    VARCHAR(50) NOT NULL
    
    CONSTRAINT pk_user PRIMARY KEY (id_user)
)

CREATE TABLE post(
    id_post         INT AUTO_INCREMENT NOT NULL,
    id_user         BIGINT NOT NULL,
    title           VARCHAR(50) NULL,
    body            TEXT NULL,
    id_post_krush   INT NULL

    CONSTRAINT pk_post PRIMARY KEY (id_post),
    CONSTRAINT FOREIGN KEY (id_user) REFERENCES users(id_user)
)


/* CONSULTA */

SELECT  d.id_post AS id_post,
        d.title AS title,
        d.body AS body,
        a.id_post AS id_post_krush,
        a.title AS title_krush,
        a.body AS body_krush
FROM post d
JOIN post a
ON d.id_post_krush = a.id_post