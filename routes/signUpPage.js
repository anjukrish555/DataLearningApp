var express= require('express');
var router = express.Router();
var connection = require('./connection.js');

router.get('/',function (req,res,next) {
    res.render('signUp',{ title: 'Sign Up',header: true, navbar: true, signUp: false, cart: false});
});
router.post(,function(req,res,next){
	connection.getConnection(function (err, connection) {
		if (err) throw err
	if(!req.body.fullname || !req.body.email ||!req.body.password ||!req.body.contact ||!req.body.background){
		res.json({'error':'THe input field/s is empty'});
	}else{
		var sql_stud='INSERT INTO student(studentName,studentAcademicbg,studentContactDetails) VALUES (?,?,?)',[req.body.fullname,req.body.background,req.body.contact];
		var sql_login='INSERT INTO login(emailID,password) VALUES (?,?)'[req.body.email,!req.body.password];
		var k=1;
		connection.query(sql_stud,function(error,rows,fields){
		if (err) throw err
		else{
			k++;
			//res.render('message':req.body.fullname+' was registered successfully')
		}
		});
		connection.query(sql_login,function(error,rows,fields){
		if (err) throw err
		else{
			k++;
			//res.render('message':req.body.fullname+' was registered successfully')
		}
		});
		if(k==2)
			res.render('message':req.body.fullname+' was registered successfully')
	}
	 connection.release();
	});
});
module.exports = router;