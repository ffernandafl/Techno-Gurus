CREATE DATABASE kiss;

USE kiss;

CREATE TABLE users(
    id_user      INT AUTO_INCREMENT NOT NULL,
    full_name    VARCHAR(255) NOT NULL,
    email        VARCHAR(255) NOT NULL,
    entry_key    VARCHAR(50) NOT NULL,
    cel          VARCHAR(15),

    CONSTRAINT pk_user PRIMARY KEY (id_user)
);

CREATE TABLE post(
    id_post     INT AUTO_INCREMENT NOT NULL,
    id_user         INT NOT NULL,
    id_post_origin  INT NOT NULL,
    title           VARCHAR(50) NOT NULL,
    body            NVARCHAR(4000) NOT NULL, 

    CONSTRAINT pk_comment PRIMARY KEY (id_comment)
);

CREATE TABLE post_origin(
    id_post_origin  INT AUTO_INCREMENT NOT NULL,
    id_post         INT NOT NULL

    CONSTRAINT pk_post_origin PRIMARY KEY (id_post_origin)
);