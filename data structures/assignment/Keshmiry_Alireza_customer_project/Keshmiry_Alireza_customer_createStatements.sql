drop database if exists customerdb;
create database customerdb;

create table customerdb.customer (
    customerId integer not null primary key,
    firstname varchar(6) not null,
    lastname varchar(10) not null,
    customerclass varchar(19) not null,
    address varchar(16) not null
);

drop user if exists 'mia'@'localhost';
create user 'mia'@'localhost' identified by 'Ve9mFjzY';
grant all privileges on customerdb.* to 'mia'@'localhost';

-- testing
insert into customerdb.customer values(1, 'jane', 'doe', 'fake', 'fake street');
insert into customerdb.customer values(2, 'jhon', 'doe', 'fake', 'made up street');

select * from customerdb.customer;