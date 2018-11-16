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
alter table faculty add column facultyDescription longtext;
create table student(
studentID int not null auto_increment primary key,
studentName text,
studentAcademicbg text,
studentContactDetails text
);
alter table student add email text;
//not required
create table courses(
courseID int not null auto_increment primary key,
courseName text
);
describe student;
select * from faculty;
create table paymentDetails(
paymentID int not null auto_increment primary key,
cardNumber int,
cvvNumber int,
expiryDate Date,
cardName text
);
 
create table login(
emailID text not null,
password text not null
);
select * from login;
create table cart(
cartID int not null auto_increment primary key,
studentID int,
courseID int
);

create table purchase(
purchaseID int not null auto_increment primary key,
paymentID int,
studentID int,
timestamp Date
);
create table purchasedCourses(
purchaseID int,
courseID int
);
create table role(
roleID int,
roleName text
);
insert into faculty	(facultyName,facultyQualification) values ('Joshua Bloch',  'BS in CS- Columbia University ; PhD in CS - Carnegie Mellon University');
insert into faculty	(facultyName,facultyQualification) values ('Rajkumar Ragunathan',  'BE(Hons) - P.S.G. College of Technology ; MS- Carnegie Mellon University; PhD - Carnegie Mellon University');
insert into faculty	(facultyName,facultyQualification) values ('Jeffrey Lee Eppinger',  'BS in CS- Carnegie Mellon University ; MS in CS- Carnegie Mellon University ; PhD in CS - Carnegie Mellon University');
insert into faculty	(facultyName,facultyQualification) values ('Len Bass',  'PhD in CS - Purdue University');
insert into faculty	(facultyName,facultyQualification) values ('Anthony J Lattanze',  'MS in Software Engineering - Carnegie Mellon University; Bachelors in Mathematics and CS-Christopher Newport University');

update faculty set facultyDescription='Bloch is an American software engineer and a technology author, formerly employed at Sun Microsystems and Google. He led the design and implementation of numerous Java platform features, including the Java Collections Framework, the java.math package, and the assert mechanism.'
 where facultyID=1;
update faculty set facultyDescription='An IEEE Fellow, Ragunathan Rajkumar is the George Westinghouse Professor with the Department of Electrical and Computer Engineering'
 where facultyID=2;
 update faculty set facultyDescription='Eppinger is Professor of the Practice at Carnegie Mellon University where he teaches Java and Web Application Development in the School of Computer Science. Prior to joining the faculty in 2001, he was an Adjunct Professor of Computer Science.'
 where facultyID=3;
 update faculty set facultyDescription='Bass is an American software engineer, Emeritus professor and former researcher at the Software Engineering Institute, particularly known for his contributions on software architecture in practice'
 where facultyID=4;
 update faculty set facultyDescription=' Lattanze is the Director of Professional Software Engineering Programs and a Teaching Professor in the Institute for Software Research (ISR) at Carnegie Mellon University (CMU). He is one of the founders and is the current director of the Embedded Software Engineering masters program.'
 where facultyID=5;

insert into classOfferings(courseName,city,season,price,classSize,facultyID, socialMediaNotification) values
('Principles of Software Construction','Pittsburgh,Pennsylvania','Fall','125',20,'1','https://twitter.com/joshbloch/status/677202203690450944?lang=en');


insert into classOfferings(courseName,city,season,price,classSize,facultyID) values
('API Design and Implementation','San Francisco,California','Summer','325',25,'1');

insert into classOfferings(courseName,city,season,price,classSize,facultyID) values
('Embedded Real-Time Systems','Pittsburgh,Pennsylvania','Spring','625',15,'2');

select * from classOfferings, faculty where faculty.facultyID=classOfferings.facultyID;
select courseID,courseName,city,season,price,classSize,facultyName,socialMediaNotification,videoLinks from classOfferings, faculty where faculty.facultyID=classOfferings.facultyID;

select * from classOfferings;
select * from faculty, classOfferings where faculty.facultyID=classofferings.facultyID;
select courseID,courseName,city,season,price,classSize,facultyName,facultyDescription,socialMediaNotification,videoLinks from classOfferings, faculty where faculty.facultyID=classOfferings.facultyID;

select count(*) from faculty;
select count(*) from classOfferings;
show tables;
describe classOfferings;
