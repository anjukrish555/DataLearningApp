var express= require('express');
var router = express.Router();
var connection = require('./connection.js');

router.get('/',function (req,res,next) {
	res.render('addToCart',{ title: 'Add to Cart',header: true, navbar: true, signUp: false, cart: true});
});
router.post('/', function(req,res,next){
	var session;
	session = req.session;
	studentID=session.id;
	connection.getConnection(function (err, connection) {
		if (err) throw err
		if(!req.body.courseId){
			res.render('addToCart', {
				title: 'Add to Cart',
				header: true,
				navbar: true,
				signUp: false,
				cart: true,
				msg: "All fields should be filled!"
			});
		}
		else{
			connection.query('INSERT into cart (studentID,courseID) VALUES (?,?)',[studentID,req.body.courseId], function(err, results,fields){
			if(err)
				throw err
			else{
				res.render('addToCart', {
				title: 'Add to Cart',
				header: true,
				navbar: true,
				signUp: false,
				cart: true,
				msg: "Course successfully added to cart!"
			});
			}
			});
		}
		connection.release();
	});
});
module.exports = router;