-- Problem 5: Create a view of IT department employees, then query those
-- earning above 80000
-- Depends on: 00_setup_employees_projects.sql

create view IT_emp_ As
SELECT emp_name,
    salary
from employees
where department = "IT";

select emp_name
from IT_emp_
where salary > 80000;
