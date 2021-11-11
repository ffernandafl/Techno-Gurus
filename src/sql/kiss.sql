CREATE DATABASE kiss;

USE kiss;

CREATE TABLE users(
    id_user      INT AUTO_INCREMENT NOT NULL,
    full_name    VARCHAR(255) NOT NULL,
    email        VARCHAR(255) NOT NULL,
    entry_key    VARCHAR(50) NOT NULL,
    cel          VARCHAR(15),

    CONSTRAINT pk_user PRIMARY KEY (id_user)
)

CREATE TABLE post(
    id_post         INT AUTO_INCREMENT NOT NULL,
    id_user         INT NOT NULL,
    title           VARCHAR(50) NULL,
    body            NVARCHAR(3720) NULL, 
    id_post_father  INT NULL,
    id_post_krush   INT NULL,

    CONSTRAINT pk_post PRIMARY KEY (id_post),
    CONSTRAINT FOREIGN KEY (id_user) REFERENCES users(id_user)
)

/*CREATE TABLE pagos(
    id_post         INT AUTO_INCREMENT NOT NULL,
    id_user         INT NOT NULL,
    title           VARCHAR(50) NULL,
    body            NVARCHAR(3720) NULL, 
    id_post_father  INT NULL,
    id_post_krush   INT NULL

    CONSTRAINT pk_post PRIMARY KEY (id_post),
    CONSTRAINT FOREIGN KEY (id_user) REFERENCES users(id_user)
);*/