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
  image VARCHAR(255),
  website VARCHAR(255),
  description VARCHAR(255),
)

CREATE TABLE IF NOT EXISTS user_parks (
  id BIGSERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users,
  park_id INTEGER REFERENCES parks
)
