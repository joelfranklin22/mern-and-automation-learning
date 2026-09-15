# SQL Practice — Reorganized

## leetcode/
Solved LeetCode SQL problems, self-contained (no setup file needed).
- leetcode_1251_average_selling_price.sql
- leetcode_175_combine_two_tables.sql
- leetcode_620_not_boring_movies.sql

## 01_basics/
DDL/DML basics — create/alter table, insert, update, delete, constraints.
- sql_ddl_dml_basics.sql

## 02_subqueries_views_joins/
Run 00_setup_employees_projects.sql first, then any problem file (01–10):
subqueries, correlated subqueries, views, self joins (manager mapping),
employee-project joins. See comments inside 10_employee_project_name_join.sql
for a join-condition bug kept from the original file.

## 03_window_functions/
Run 00_setup_employees.sql first, then any problem file (01–04):
ROW_NUMBER, RANK, DENSE_RANK, PARTITION BY.
