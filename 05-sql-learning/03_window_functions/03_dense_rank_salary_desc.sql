-- Problem 13: Rank employees by salary (highest first) using DENSE_RANK
-- (ties get the same rank, next rank is NOT skipped)
-- Depends on: 00_setup_employees.sql

select emp_name,
    salary,
    DENSE_RANK() over (
        order by salary desc
    ) as salary_rank
from employees;
