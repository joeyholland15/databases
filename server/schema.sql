CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INT NOT NULL,
  message_text VARCHAR(100),
  created_at TIME(0),
  room_id INT,
  user_id INT,
  PRIMARY KEY(id)
  /* we have not created ref table yet */
  -- FOREIGN KEY (room_id) REFERENCES rooms (id),
  -- FOREIGN KEY (user_id) REFERENCES user (id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

