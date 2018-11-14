var express = require('express');
var mysql = require('mysql')

var pool = mysql.createPool({
    connectionLimit : 100,
    host     : 'datalearndb.cqjo7w2gxzzl.us-east-2.rds.amazonaws.com',
    user     : 'admin',
    password : '98944svk',
    database : 'ddse'
});

module.exports.getConnection = function(callback) {
    pool.getConnection(function(err, conn) {
        if(err) {
            return callback(err);
        }
        callback(err, conn);
    });
}
