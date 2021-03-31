drop database if exists superherodb;

create database superherodb;

use superherodb;

create table superhero(
    heroID integer not null primary key,
    name varchar(15) not null,
    gear varchar(21) not null,
    custome varchar(14) not null,
    yearOfBirth integer not null
);

drop user if exists 'felix'@'localhost';
create user if not exists 'felix'@'localhost' identified by 'secret';

grant all privileges on superherodb.* to 'felix'@'localhost';


insert into superhero values (
    3,'SteelFoot', 'MemoryEnhancer', 'blue', 1930
);
insert into superhero values (
    7,'RustMan', 'JumpBoots', 'green', 1990
);

