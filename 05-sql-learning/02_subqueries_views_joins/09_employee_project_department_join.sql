-- Problem 9: List each employee with their assigned project and department
-- Depends on: 00_setup_employees_projects.sql

SELECT e1.emp_name AS Employee_Name,
    p1.project_name AS Project_Name,
    e1.department AS Department
FROM employees e1
    JOIN projects p1 ON e1.emp_id = p1.emp_id;
