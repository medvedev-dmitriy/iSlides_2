var express  = require('express');
var session  = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan    = require('morgan');
var app      = express();
var path     = require('path');
var port     = process.env.PORT || 8080;

var passport = require('passport');
var flash    = require('connect-flash');

require('./config/passport')(passport); 

app.use(morgan('dev')); 
app.use(cookieParser());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname , 'views'));
app.set('view engine', 'ejs'); 
app.use(express.static(path.join(__dirname + '/', 'public')));

app.use(session({
	secret: 'vidyapathaisalwaysrunning',
	resave: true,
	saveUninitialized: true
 } )); 
app.use(passport.initialize());
app.use(passport.session()); 
app.use(flash()); 

require('./app/routes.js')(app, passport);
require('./app/presentation-routes.js')(app);

app.listen(port);
console.log('The magic happens on port ' + port);
