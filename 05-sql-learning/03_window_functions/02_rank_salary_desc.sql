-- Problem 12: Rank employees by salary (highest first) using RANK
-- (ties get the same rank, next rank is skipped)
-- Depends on: 00_setup_employees.sql

select emp_name,
    salary,
    RANK() over (
        order by salary desc
    ) as salary_rank
from employees;
