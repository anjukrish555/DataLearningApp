var express= require('express');
//var mysql = require('mysql');
var router = express.Router();
var connection = require('./connection.js');
router.get('/',function(req, res) {
    var session;
    session = req.session;
    var activeMsg = 'Hello!';
    if(session.name){
        activeMsg = 'Hello '+session.name+'!';
    }
    connection.getConnection(function (err, connection) {
        if (err) throw err
        var sql = 'select courseID,courseName,city,season,price,classSize,facultyName,facultyQualification,facultyDescription,socialMediaNotification,videoLinks from classOfferings, faculty where faculty.facultyID=classOfferings.facultyID;';

        connection.query(sql, function (err, rows, fields) {
            if (err) throw err
            if (rows != undefined) {
                var jsonStr = JSON.stringify(rows);
                var jsonObj = JSON.parse(jsonStr);
                res.render('viewCourses',{ title: 'Courses Offered',header: true, navbar: true, cart: true, signUp: true, signUpMsg: activeMsg, courses:jsonObj});
            }
            connection.release();
        });
    });
});
module.exports = router;


