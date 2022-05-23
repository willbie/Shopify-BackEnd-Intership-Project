DROP DATABASE Inventory;

CREATE DATABASE Inventory;

USE Inventory;

CREATE TABLE INVENTORY (
  ID int NOT NULL AUTO_INCREMENT,
  item VARCHAR(255),
  deletionComments VARCHAR(255),
  deleted boolean,
  PRIMARY KEY (ID)
);

