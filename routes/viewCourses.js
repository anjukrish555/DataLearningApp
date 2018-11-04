var express= require('express');
var router = express.Router();
var connection = require('./connection.js');

router.get('/',function(req, res, next) {
    connection.getConnection(function (err, connection) {
        if (err) throw err
        var sql = 'select courseID,courseName,city,season,price,classSize,facultyName,socialMediaNotification,videoLinks from classOfferings, faculty where faculty.facultyID=classOfferings.facultyID';

        connection.query(sql, function (err, rows, fields) {
            if (err) throw err
            if (rows != undefined) {
                var jsonStr = JSON.stringify(rows);
                var jsonObj = JSON.parse(jsonStr);
                console.log(jsonObj);
                res.render('viewCourses',{ title: 'Express',header: true, navbar: true, courses:jsonObj});
                //res.send({msg: "Something went wrong", success: false});
            }
            connection.release();
        });
    });
});
module.exports = router;