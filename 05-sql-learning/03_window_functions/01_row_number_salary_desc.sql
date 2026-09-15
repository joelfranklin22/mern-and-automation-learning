-- Problem 11: Rank employees by salary (highest first) using ROW_NUMBER
-- Depends on: 00_setup_employees.sql

select emp_name,
    salary,
    ROW_NUMBER() over (
        order by salary desc
    ) AS highest_salary
from employees;
