var express= require('express');
var router = express.Router();
var connection = require('./connection.js');
router.get('/', function(req,res,next){
    var session;
    session = req.session;
    studentID=session.id;
    connection.getConnection(function (err, connection) {
        if (err) throw err
        connection.query('SELECT count(*) as count from cart where studentID=?', [studentID], function (err, rows, fields) {
            var resp = rows[0].count;
            res.json({
                "success": true,
                "value": resp
            });
        });
    });
});
router.post('/', function(req,res,next){
	var session;
	session = req.session;
	studentID=session.id;
	connection.getConnection(function (err, connection) {
        if (err) throw err

        connection.query('INSERT into cart (studentID,courseID) VALUES (?,?)', [studentID, req.body.courseId], function (err, rows, fields) {
            if (err)
                throw err
            else {
                connection.query('SELECT count(*) as count from cart where studentID=?', [studentID], function (err, rows, fields) {
                    var resp = rows[0].count;
                    res.json({
                        "success":true,
                        "value": resp
                    });
                });
            }
        });
        connection.release();
    });
});
module.exports = router;