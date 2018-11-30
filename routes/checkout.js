var express = require('express');
var router = express.Router();
var connection = require('./connection.js');

router.get('/', function (req, res, next) {
    var session;
    session = req.session;
    studentID = session.id;
    console.log(studentID);
    connection.getConnection(function (err, connection) {
        if (err) throw err
        if (studentID == null) {
            res.render('checkout', {
                title: 'Checkout',
                header: true,
                navbar: true,
                signUp: false,
                cart: true,
                msg: "User not logged in"
            });
        } else {
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
        connection.release();
    });
});
module.exports = router;