drop database if exists employeeDB;
create database employeeDB;

create table employeeDB.employee(
    employeeID integer not null primary key,
    firstName varchar(20) not null,
    lastName varchar(30) not null,
    department varchar (15),
    salary decimal (6,2)
);

drop user if exists 'mary'@'localhost';
create user 'mary'@'localhost' identified by 'secret';
grant all privileges on employeeDB.* to 'mary'@'localhost';

insert into employeeDB.employee values (1, 'Mary', 'River','ICT' , 3000),(2, 'Matt', 'River','admin' , 4000),(3, 'Peter', 'Purse','finace' , 7000),(4, 'Will', 'Guard','security' , 6000);

insert into employeeDB.employee (employeeID,firstName,lastName) values(5,'vera','jones');
