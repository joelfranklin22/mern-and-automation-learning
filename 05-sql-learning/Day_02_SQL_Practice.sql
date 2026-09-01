show DATABASES;
create DATABASE test;
use test;
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
SELECT *
from employees;
-- Problem -1
SELECT emp_name,
    salary
FROM employees
WHERE salary > (
        SELECT AVG(salary)
        FROM employees
    );
-- Problem -2
select emp_name,
    department
from employees
where department = (
        select department
        from employees
        where emp_name = "John"
    );
-- Problem-3
SELECT emp_name
from employees
where salary IN(
        SELECT max(salary)
        from employees
        group by department
    );
-- Problem -4
select emp_name,
    department
from employees e1
where salary >(
        select avg(salary)
        from employees e2
        where e1.department = e2.department
    );
-- Problem -5
create view IT_emp_ As
SELECT emp_name,
    salary
from employees
where department = "IT";
select emp_name
from IT_emp_
where salary > 80000;
-- Problem -6
create view name_dep as
select emp_name,
    department
from employees;
select *
from name_dep;
-- Problem -7
SELECT e1.emp_name AS Employee,
    e2.emp_name AS Manager
FROM employees e1
    INNER JOIN employees e2 ON e1.manager_id = e2.emp_id;
-- Problem-8
SELECT e1.emp_name AS Employee,
    e2.emp_name AS Manager
FROM employees e1
    LEFT JOIN employees e2 ON e1.manager_id = e2.emp_id;
CREATE TABLE projects(
    project_id INT,
    project_name VARCHAR(30),
    emp_id INT
);
INSERT INTO projects
VALUES (1, 'Banking App', 101),
    (2, 'CRM', 103),
    (3, 'Payroll', 102),
    (4, 'Shopping App', 108),
    (5, 'Billing', 109);
-- Problem -9
SELECT e1.emp_name AS Employee_Name,
    p1.project_name AS Project_Name,
    e1.department AS Department
FROM employees e1
    JOIN projects p1 ON e1.emp_id = p1.emp_id;
-- Problem -10
select e1.emp_name as employee_name,
    p1.project_name as Project_name
from employees e1
    JOIN projects p1 on e1.emp_id = e1.emp_id;