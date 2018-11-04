var express= require('express');
var router = express.Router();
var connection = require('./connection.js');

router.get('/',function (req,res,next) {
    res.render('signIn',{ title: 'Sign In',header: true, navbar: true, signUp: false, cart: false});
});
module.exports = router;