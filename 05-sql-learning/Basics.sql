use employee;
show tables;
create table employee_details(
id int PRIMARY KEY,
name VARCHAR(20),
age int,
city varchar(20));
desc employee_details
drop database employee;
show DATABASES;
DROP DATABASE employee;
show DATABASES;

show DATABASES;
use student;
show tables;
create table student_info(
	id int PRIMARY KEY,
    name varchar(30),
    age int,
    city VARCHAR(20) );
show tables;
desc student_info;
ALTER table student_info add column email VARCHAR(20);
desc student_info;
ALTER table student_info rename COLUMN city to location;
desc student_info;
ALTER table student_info drop COLUMN email;
alter table student_info rename student_data;
show tables;
insert into student_data VALUES(1,"joel",23,"erode");
insert into student_data VALUES(2,"Nancy",21,"chennai");
insert into student_data VALUES(3,"April",26,"madurai");
insert into student_data VALUES(4,"James",18,"coimbatore");
insert into student_data VALUES(5,"Sony",12,"erode");
SELECT * from student_data;
select name,location from student_data;
select name from student_data where age>21;
select * from student_data where location="chennai";
select * from student_data where name="joel";
UPDATE student_data SET location = 'chennai' WHERE id = 1;
select * from student_data;
update student_data set age=23 where name="nancy";
delete from student_data where id=4;
delete from student_data where location='chennai';
show tables;
create table employee(
	emp_id int PRIMARY KEY,
    emp_name VARCHAR(20) NOT NULL,
    email VARCHAR(20) UNIQUE,
    salary DECIMAL(6,3)CHECK(salary>1000),
    city varchar(20) default 'Chennai' );

desc employee;
create table employee_2(
	emp_id int ,
    email VARCHAR(20),
    aadhar_no int,
    phone_no int,
    name VARCHAR(20),
    PRIMARY KEY(emp_id,aadhar_no,email,phone_no));











