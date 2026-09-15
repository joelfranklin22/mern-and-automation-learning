-- Problem 3: Employee(s) with the highest salary in each department
-- Depends on: 00_setup_employees_projects.sql

SELECT emp_name
from employees
where salary IN(
        SELECT max(salary)
        from employees
        group by department
    );
