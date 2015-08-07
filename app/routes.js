module.exports = function(app, passport) {

	app.get('/', function(req, res) {
		res.render('index.ejs');
	});

	app.get('/login', function(req, res) {
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	app.post('/login', passport.authenticate('local-login'),
        function(req, res) {
            res.send(req.user);
    });

    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/profile',
            failureRedirect : '/signup',
            failureFlash : true
        }),
        function(req,res){
            res.send(req.flash);
            res.send(req.user);
        });

	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('index.ejs', {
			user : req.user
		});
	});

    app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

    app.get('/isloggedin', function(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    });

};

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
		return next();
	res.redirect('/');
}
