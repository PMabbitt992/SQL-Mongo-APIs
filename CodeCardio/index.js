var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var app = express();

//view engine setup
/**
 * 1. register view engine
 * 2. define path
 * 3. tell it what engine see
 */

app.engine() //1
app.set('views', path.join(__dirname, 'views')); //2
app.set('view engine', 'ejs'); //3


/**
 * Server Configuration
 */
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.txt())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
//Give client access to 
app.use(express.static(path.join(__dirname, 'public')));


/**
 * Routes / Controller
 */

//var indexRouter = require('./controllers/home);
app.use('/', homeController);

/**
 * Start Server
 */

app.listen(777);