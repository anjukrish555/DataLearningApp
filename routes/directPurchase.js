var express= require('express');
var router = express.Router();
var connection = require('./connection.js');

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
                connection.query('select courseName,price from classOfferings a,cart b where a.courseID=b.courseID and studentID=?', [studentID], function (err, rows, fields) {
                    if(err) throw err
                    console.log(rows);
                    var total = 0;
                    var count = 0;
                    for (var i = 0; i < rows.length; i++) {
                        total += rows[i].price;
                        count++;
                    }
                    res.render('checkout', {
                        title: 'Cart Checkout',
                        header: true,
                        navbar: true,
                        checkout: rows,
                        totalPrice: total,
                        signUp: false,
                        cart: false,
                        itemCount: count
                    });
                });
            }
        });
        connection.release();
    });
});
module.exports = router;