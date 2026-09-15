-- Problem 1: Employees earning more than the company-wide average salary
-- Depends on: 00_setup_employees_projects.sql

SELECT emp_name,
    salary
FROM employees
WHERE salary > (
        SELECT AVG(salary)
        FROM employees
    );
