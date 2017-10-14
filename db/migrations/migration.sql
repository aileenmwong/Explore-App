DROP DATABASE explore_app;
CREATE DATABASE explore_app;

CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS parks (
  id BIGSERIAL PRIMARY KEY,
  park_name VARCHAR(255),
  address VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(255),
  coordinates VARCHAR(255),
  lat INT,
  lng INT,
  image VARCHAR(1000),
  website VARCHAR(1000),
  description VARCHAR(1000),
  weather VARCHAR(1000),
  user_id INTEGER REFERENCES users
);
