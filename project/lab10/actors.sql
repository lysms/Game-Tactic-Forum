 -- create the tables for our actors

CREATE TABLE `actors` (
 `actorid` int(10) unsigned NOT NULL AUTO_INCREMENT,
 `last_name` varchar(40) NOT NULL,
 `first_names` varchar(40) NOT NULL,
 `dob` date DEFAULT NULL,
 PRIMARY KEY (`actorid`)
);


-- insert data into the tables

INSERT INTO actors VALUES
  (1, "Diesel", "Vin", '1967-07-18'),
  (2, "John Downey", "Robert", '1965-04-04'),
  (3, "Paltrow", "Gwyneth", '1972-09-28'),
  (4, "Hemsworth", "Chris", '1983-08-11'),
  (5, "Evans", "Chris", '1981-06-13');