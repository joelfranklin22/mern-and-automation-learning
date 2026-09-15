-- Problem 8: Map each employee to their manager's name (self join, LEFT JOIN)
-- Keeps employees with no manager, Manager column shows NULL for them
-- Depends on: 00_setup_employees_projects.sql

SELECT e1.emp_name AS Employee,
    e2.emp_name AS Manager
FROM employees e1
    LEFT JOIN employees e2 ON e1.manager_id = e2.emp_id;
