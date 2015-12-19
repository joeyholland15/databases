CREATE DATABASE IF NOT EXISTS chat;

USE chat;

CREATE TABLE IF NOT EXISTS test (
  text VARCHAR(100),
  roomname VARCHAR(50)
);

/* Create other tables and define schemas for them here! */
-- CREATE TABLE IF NOT EXISTS users (
--   id INT NOT NULL,
--   username VARCHAR(50),
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE IF NOT EXISTS rooms(
--   id INT NOT NULL,
--   roomname VARCHAR(50),
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE IF NOT EXISTS messages (
--   /* Describe your table here.*/
--   id INT,
--   message_text VARCHAR(100),
--   created_at TIMESTAMP,
--   room_id INT,
--   user_id INT,
--   PRIMARY KEY(id),
--   FOREIGN KEY (room_id) REFERENCES rooms (id),
--   FOREIGN KEY (user_id) REFERENCES users (id)
-- );

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

