CREATE DATABASE IF NOT EXISTS chat;

USE chat;

/* Create other tables and define schemas for them here! */
CREATE TABLE IF NOT EXISTS messages(
  /* Describe your table here.*/
  ID int NOT NULL PRIMARY KEY auto_increment,
  text varChar(200),
  userID int,
  roomname varchar(20)
);

CREATE TABLE IF NOT EXISTS users(
  ID int PRIMARY KEY auto_increment,
  username varChar(16),
  UNIQUE (username)
);

ALTER TABLE messages ADD FOREIGN KEY (userID) REFERENCES users(ID);



/*  Execute this file from the command line by typing:
 *   sudo mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- use chat; (to select database) inside of mysql server