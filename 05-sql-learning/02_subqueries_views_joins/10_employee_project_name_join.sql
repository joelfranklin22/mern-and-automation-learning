-- Problem 10: List each employee with their assigned project name
-- BUG (kept as-is from original): join condition is "e1.emp_id = e1.emp_id"
-- (always true, self-referencing) instead of "e1.emp_id = p1.emp_id",
-- so this produces a cross join, not a real match. Fix the condition to
-- e1.emp_id = p1.emp_id if you want correct results.
-- Depends on: 00_setup_employees_projects.sql

select e1.emp_name as employee_name,
    p1.project_name as Project_name
from employees e1
    JOIN projects p1 on e1.emp_id = e1.emp_id;
