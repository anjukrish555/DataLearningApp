var express= require('express');
var router = express.Router();
var connection = require('./connection.js');

router.get('/',function (req,res,next) {
	res.render('checkout',{ title: 'Checkout',header: true, navbar: true, signUp: false, cart: true});
});
router.post('/', function(req,res,next){
	var session;
	session = req.session;
	studentID=session.id;
	connection.getConnection(function (err, connection) {
		if (err) throw err
		if(studentID==null){
			res.render('checkout', {
				title: 'Checkout',
				header: true,
				navbar: true,
				signUp: false,
				cart: true,
				msg: "User not logged in"
			});
		}
		else{
			connection.query('select courseID from cart where studentID=?',[studentID],function(err,rows,fields){
				if(err) throw err;
				if(!err && rows.length>0){
					var a=[];
					var kt=0;
					var op='{"message":"The action was successful","courses purchased":['; 
					for(var i=0;i<rows.length;i++){
						connection.query('select courseName,price from classOfferings where courseID=?',[rows[i].courseID],function(err2,output,fields2){						 
							var v1= '{"courseName":"'+output[0].courseName+'", "price":"'+output[0].price+'"}';
							a.push(v1);
							kt+=output[0].price;
						});

					}
					var v2= '{"price":"'+kt+'"}';
					a.push(v2);
					op=op+a+']}';
					var jsonStr = JSON.stringify(op);
					var jsonObj = JSON.parse(jsonStr);
					res.render('checkout',{ title: 'Cart Checkout',header: true, navbar: true, checkout:jsonObj});
				}

			});
		}
		connection.release();
	});
});
module.exports = router;