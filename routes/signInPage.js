var express= require('express');
var router = express.Router();
var connection = require('./connection.js');

router.get('/',function (req,res,next) {
	res.render('signIn',{ title: 'Sign In',header: true, navbar: true, signUp: false, cart: false});
});
router.post('/', function(req,res,next){
	var session;
	session = req.session;
	connection.getConnection(function (err, connection) {
		if (err) throw err
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
		else{
			connection.query('SELECT * from login where emailID=? and password=?',[req.body.email,req.body.password], function(err, results,fields){
				if(!err && results.length<=0){
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
				else if(err){
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
				else{
					connection.query('SELECT studentName,studentID from student where emailID=?',[req.body.email], function(err, results,fields){
						if(!err && results.length>0){
							session.name = results[0].studentName;
							session.email=req.body.email;
							session.id=results[0].studentID;
							res.redirect('/viewCourses');	
						}  

					});
				}
			});
		}
		connection.release();
	});
});
module.exports = router;