CREATE DATABASE burgers_db;
USE burgers_db;

-- Create a burgers table with the required fields --
CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(250) NOT NULL,
	devoured BOOLEAN DEFAULT false,
  	PRIMARY KEY(id)
);