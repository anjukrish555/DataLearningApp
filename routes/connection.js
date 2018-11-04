var express = require('express');
var mysql = require('mysql')

var pool = mysql.createPool({
    connectionLimit : 100,
    host     : 'localhost',
    user     : 'root',
    password : 'admin',
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