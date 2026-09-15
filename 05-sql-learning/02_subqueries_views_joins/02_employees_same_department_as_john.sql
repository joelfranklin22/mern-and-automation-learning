-- Problem 2: Employees who are in the same department as John
-- Depends on: 00_setup_employees_projects.sql

select emp_name,
    department
from employees
where department = (
        select department
        from employees
        where emp_name = "John"
    );
