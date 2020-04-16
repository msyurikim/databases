CREATE DATABASE IF NOT EXISTS chat;

USE chat;


/* Create other tables and define schemas for them here! */

CREATE TABLE IF NOT EXISTS rooms(
  ID int NOT NULL,
  name varChar(255) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS users(
  ID int NOT NULL,
  name varChar(255) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS messages(
  /* Describe your table here.*/

  ID int NOT NULL,
  text varChar(255) NOT NULL,
  userID int NOT NULL,
  roomID int NOT NULL,
  FOREIGN KEY (userID) REFERENCES users(ID),
  FOREIGN KEY (roomID) REFERENCES rooms(ID),
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS friends(
  ID int NOT NULL,
  name varChar(255) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS users_friends(
  ID int NOT NULL,
  userID int NOT NULL,
  friendID int NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (userID) REFERENCES users(ID),
  FOREIGN KEY (friendID) REFERENCES friends(ID)
);



/*  Execute this file from the command line by typing:
 *   sudo mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- use chat (to select database)