
use customerdb;

--deleting the test insertions
delete from customer;

--insert data 
insert into customer values(6543, 'Sophie', 'Lake', 'SolidGold', 'Cloudhill 3');
insert into customer values(7987, 'Jeff', 'Hammer', 'R.I.P', 'Bugpath 42');
insert into customer values(4123, 'Abel', 'Smith', 'VIP', 'Dataway 35');
insert into customer values(3000, 'Paula', 'River', 'SuperBonus', 'Station 5');
insert into customer values(2000, 'Layla', 'Bell', 'KeyCustomer', 'Codepath 2');
insert into customer values(1000, 'Matt', 'Irony', 'OrdinaryPenPusher', 'Street 20');
insert into customer values(5000, 'Olivia', 'Garcia', 'ToBeAwoided', 'River side 2');

-- getting data
select * from customer;

select customerId, address, lastname from customer;

select * from customer where lastname = 'Hammer';
select * from customer where lastname = 'River';
select * from customer where customerclass  = 'SolidGold';

--update data 
update customer set customerclass= 'R.I.P' , firstname= 'Jeff' where customerId = 7987;
update customer set customerclass= 'R.I.P' , lastname= 'Smith' where customerId = 2000;
update customer set customerclass= 'SolidGold' , firstname= 'Layla', lastname= 'Irony' where customerId = 4123;
update customer set customerclass= 'R.I.P' , firstname= 'Matt', lastname= 'Smith' where customerId = 7987;

select * from customer;

--delete data 
delete from customer where customerId= 1000;
delete from customer where customerId= 4123;
delete from customer where firstname = 'Matt';
delete from customer where address = 'Cloudhill 3' and firstname = 'Jeff';
delete from customer where address = 'Cloudhill 3' or address = 'Codepath 2'  or customerclass = 'ToBeAwoided';

select * from customer;


