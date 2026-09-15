-- Problem 7: Map each employee to their manager's name (self join, INNER JOIN)
-- Note: INNER JOIN drops employees who have no manager (manager_id IS NULL)
-- Depends on: 00_setup_employees_projects.sql

SELECT e1.emp_name AS Employee,
    e2.emp_name AS Manager
FROM employees e1
    INNER JOIN employees e2 ON e1.manager_id = e2.emp_id;
