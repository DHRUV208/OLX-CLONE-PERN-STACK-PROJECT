CREATE DATABASE olxdb;

-- CREATE TABLE todo(
--     todo_id SERIAL PRIMARY KEY,
--     description VARCHAR(255)
-- )
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    email TEXT
)

INSERT INTO users(name, email)
    VALUES('Riya','riyag2713@gmail.com'),
          ('Dhruv','mehtadhruv208@gmail.com');

SELECT * from "users";