-- Problem 6: Create a simple view exposing only name + department
-- Depends on: 00_setup_employees_projects.sql

create view name_dep as
select emp_name,
    department
from employees;

select *
from name_dep;
