var express = require('express');
var router = express.Router();
var connection = require('./connection.js');

router.get('/', function (req, res, next) {
    res.render('signUp', {title: 'Sign Up', header: true, navbar: true, signUp: false, cart: false, signUpError: false});
});

router.post('/', function (req, res, next) {
    var session;
    session = req.session;
    connection.getConnection(function (err, connection) {
        if (err) throw err
        if (!req.body.fullname || !req.body.email || !req.body.password || !req.body.contact || !req.body.background || !req.body.confirm) {
            res.render('signUp', {
                title: 'Sign Up',
                header: true,
                navbar: true,
                signUp: false,
                cart: false,
                signUpError: true,
                msg: "All fields should be filled!"
            });
        } else if(req.body.password != req.body.confirm){
            res.render('signUp', {
                title: 'Sign Up',
                header: true,
                navbar: true,
                signUp: false,
                cart: false,
                signUpError: true,
                msg: "Passwords don't match!"
            });
        } else {
            connection.query('SELECT email from student where email=?', req.body.email,
                function (err, rows, fields) {
                    if (err)
                        connection.end;
                    if (rows.length != 0) {
                        res.render('signUp', {
                            title: 'Sign Up',
                            header: true,
                            navbar: true,
                            signUp: false,
                            cart: false,
                            signUpError: true,
                            msg: "An account has already been created for the given Email ID!"
                        });
                    }else{
                        var k = 0;
                        connection.query('INSERT INTO login(emailID,password) VALUES (?,?)',[req.body.email, req.body.password],
                            function (error, rows, fields) {
                                if (err) throw err
                                else {
                                    k++;
                                    connection.query('INSERT INTO student(studentName,studentAcademicbg,studentContactDetails,email) VALUES (?,?,?,?)', [req.body.fullname, req.body.background, req.body.contact, req.body.email],
                                        function (error, rows, fields) {
                                            if (err) throw err
                                            else {
                                                k++;
												connection.query('SELECT studentID from student where emailID=?',[req.body.email], function(err, rows, fields){
                                                if (k == 2) {
                                                    session.name = req.body.fullname;
													session.email=req.body.email;
													session.id=rows[0].studentID;
                                                    res.redirect('/viewCourses');
                                                }
												});
                                            }
                                        });
                                }
                            });
                    }
                });
        }
        connection.release();
    });
});
module.exports = router;