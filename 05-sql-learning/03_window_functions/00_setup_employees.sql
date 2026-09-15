-- Common setup used by every file in this folder.
-- Run this first before running any problem file below.

CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    emp_name VARCHAR(50),
    department VARCHAR(30),
    salary INT,
    city VARCHAR(30),
    manager_id INT
);
INSERT INTO employees
VALUES (101, 'John', 'IT', 80000, 'Chennai', 105),
    (102, 'Ram', 'HR', 50000, 'Coimbatore', 106),
    (103, 'Sam', 'IT', 90000, 'Chennai', 105),
    (104, 'David', 'Sales', 60000, 'Madurai', 107),
    (105, 'Kumar', 'IT', 120000, 'Chennai', NULL),
    (106, 'Priya', 'HR', 90000, 'Erode', NULL),
    (107, 'Arun', 'Sales', 100000, 'Salem', NULL),
    (108, 'Riya', 'IT', 75000, 'Trichy', 105),
    (109, 'Vijay', 'Sales', 65000, 'Madurai', 107),
    (110, 'Ajay', 'HR', 55000, 'Chennai', 106);
