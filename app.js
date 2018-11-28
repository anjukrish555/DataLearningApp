var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var engine = require('ejs-mate');
var sessions = require('cookie-session');

var viewCoursesRouter = require('./routes/viewCourses');
var signUpRouter = require('./routes/signUpPage');
var signInRouter = require('./routes/signInPage');
var videoRouter = require('./routes/videoRender');
var addRouter = require('./routes/addToCart');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs',engine);
app.set('view engine', 'ejs');

//session properties
app.use(sessions({
    secret:'kfebwfwkjb5654fvfwe',
    rolling: false,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 900000 }
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', viewCoursesRouter);
app.use('/viewCourses', viewCoursesRouter);
app.use('/signUp', signUpRouter);
app.use('/signIn', signInRouter);
app.use('/sampleVideo', videoRouter);
app.use('/addToCart', addRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
