create database ddse;
use ddse;
create table classOfferings(
courseID int not null auto_increment primary key,
courseName text not null,
city text,
season text,
price float,
classSize int,
facultyID int not null,
socialMediaNotification longtext,
videoLinks longtext);
create table faculty(
facultyID int not null auto_increment primary key,
facultyName text,
facultyQualification longtext);
insert into faculty	(facultyName,facultyQualification) values ('Joshua Bloch',  'BS in CS- Columbia University ; PhD in CS - Carnegie Mellon University');
insert into faculty	(facultyName,facultyQualification) values ('Rajkumar Ragunathan',  'BE(Hons) - P.S.G. College of Technology ; MS- Carnegie Mellon University; PhD - Carnegie Mellon University');
insert into faculty	(facultyName,facultyQualification) values ('Jeffrey Lee Eppinger',  'BS in CS- Carnegie Mellon University ; MS in CS- Carnegie Mellon University ; PhD in CS - Carnegie Mellon University');
insert into faculty	(facultyName,facultyQualification) values ('Len Bass',  'PhD in CS - Purdue University');
insert into faculty	(facultyName,facultyQualification) values ('Anthony J Lattanze',  'MS in Software Engineering - Carnegie Mellon University; Bachelors in Mathematics and CS-Christopher Newport University');

insert into classOfferings(courseName,city,season,price,classSize,facultyID, socialMediaNotification) values
('Principles of Software Construction','Pittsburgh,Pennsylvania','Fall','125',20,'1','https://twitter.com/joshbloch/status/677202203690450944?lang=en');


insert into classOfferings(courseName,city,season,price,classSize,facultyID) values
('API Design and Implementation','San Francisco,California','Summer','325',25,'1');

insert into classOfferings(courseName,city,season,price,classSize,facultyID) values
('Embedded Real-Time Systems','Pittsburgh,Pennsylvania','Spring','625',15,'2');

select * from classOfferings, faculty where faculty.facultyID=classOfferings.facultyID;

select * from classOfferings;
select * from faculty;
select count(*) from faculty;
select count(*) from classOfferings;
delete from classOfferings where id=3;
drop table classOfferings;
drop table faculty;
show tables;
describe classOfferings;
