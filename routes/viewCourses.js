var express= require('express');
//var mysql = require('mysql');
var router = express.Router();
var connection = require('./connection.js');

/* var connection = mysql.createConnection({
    connectionLimit : 100,
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'ddse'

})
 var sql = 'select courseID,courseName,city,season,price,classSize,facultyName,facultyDescription,socialMediaNotification,videoLinks from classOfferings, faculty where faculty.facultyID=classOfferings.facultyID;';

       connection.query(sql, function (err, rows, fields) {
            if (err) throw err
            if (rows != undefined) {
                var jsonStr = JSON.stringify(rows);
                var jsonObj = JSON.parse(jsonStr);
                console.log(jsonObj);
                res.render('viewCourses',{ title: 'Courses Offered',header: true, navbar: true, courses:jsonObj});
            }
            connection.release();
        }); */
router.get('/',function(req, res) {
    connection.getConnection(function (err, connection) {
        if (err) throw err
        var sql = 'select courseID,courseName,city,season,price,classSize,facultyName,facultyDescription,facultyQualification,socialMediaNotification,videoLinks from classOfferings, faculty where faculty.facultyID=classOfferings.facultyID;';

        connection.query(sql, function (err, rows, fields) {
            if (err) throw err
            if (rows != undefined) {
                var jsonStr = JSON.stringify(rows);
                var jsonObj = JSON.parse(jsonStr);
                console.log(jsonObj);
                res.render('viewCourses',{ title: 'Courses Offered',header: true, navbar: true, courses:jsonObj});
            }
            connection.release();
        });
    });
});
module.exports = router;


