-- Problem 4: Employees earning more than their own department's average salary
-- (correlated subquery)
-- Depends on: 00_setup_employees_projects.sql

select emp_name,
    department
from employees e1
where salary >(
        select avg(salary)
        from employees e2
        where e1.department = e2.department
    );
