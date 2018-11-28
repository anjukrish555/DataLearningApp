var express= require('express');
var router = express.Router();
var connection = require('./connection.js');

router.get('/',function (req,res,next) {
	res.render('signIn',{ title: 'Sign In',header: true, navbar: true, signUp: false, cart: false, signUpError: false});
});
router.post('/', function(req,res,next){
	console.log('hit');
	var session;
	session = req.session;
		if(!req.body.email || !req.body.password){
			res.render('signIn', {
				title: 'Sign In',
				header: true,
				navbar: true,
				signUp: false,
				cart: false,
				signUpError: true,
				msg: "All fields should be filled!"
			});
		}
		else {
            console.log("inside2");
            connection.getConnection(function (err, connection) {
                if (err) throw err
                console.log("inside");
                connection.query('SELECT * from login where emailID=? and password=?', [req.body.email, req.body.password], function (err, rows, fields) {
                    if (!err && rows.length <= 0) {
                        console.log("1");
                        res.render('signIn', {
                            title: 'Sign In',
                            header: true,
                            navbar: true,
                            signUp: false,
                            cart: false,
                            signUpError: true,
                            msg: "There seems to be an issue with the username/password combination that you entered"
                        });
                    }
                    else {
                        console.log("3");
                        console.log(req.body.email);
                        connection.query('SELECT studentName,studentID from student where email=?', [req.body.email], function (err, rows, fields) {
                            if(err) {throw err}
                            if (rows.length > 0) {
                                console.log(rows);
                                session.name = rows[0].studentName;
                                session.email = req.body.email;
                                session.id = rows[0].studentID;
                                res.redirect('/viewCourses');
                            }
                        });
                    }
                });
                connection.release();
            });
        }
});
module.exports = router;