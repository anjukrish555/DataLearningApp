var mysql = require('mysql');
var express= require('express');
var app=express();
var bodyParser=require('body-parser');
var router = express.Router();
//var isNull = require('is-null-or-empty');
var connection = require('./connection.js');

//console.log("hey");
		
/* view courses */

module.exports.viewCourse = function() {
var sql = 'select courseID,courseName,city,season,price,classSize,facultyName,socialMediaNotification,videoLinks from classOfferings, faculty where faculty.facultyID=classOfferings.facultyID';
connection.getConnection(function(err, connection){
		if(err) throw err
		connection.query(sql, function (err, rows, fields) {
			if(err) throw err
			for(var i=0;i<rows.length;i++)
				console.log(rows[i]);
			return rows;
			connection.release();
		});	
		});	
};
