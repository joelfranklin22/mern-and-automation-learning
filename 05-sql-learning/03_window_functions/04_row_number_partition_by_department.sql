-- Problem 14: Rank employees by salary within each department
-- (PARTITION BY resets the numbering per department)
-- Depends on: 00_setup_employees.sql

select emp_name,
    department,
    salary,
    ROW_NUMBER() over (
        PARTITION BY department
        ORDER BY salary
    ) as dep_salary
from employees;
