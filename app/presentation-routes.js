var mysql = require('mysql');
var dbconfig = require('../config/database');
var connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);

module.exports = function(app) {
    app.get('/presentations', function(req, res, done) {
        console.log(req.query);
        var username = req.query.user;
        connection.query("SELECT * FROM presentations WHERE username = ?",[username], function(err, rows){
            if (err)
                return done(err);
            if (!rows.length) {
                return done(null, false, req.flash('presentetionError', 'No presentetion found.'));
            }

            console.log(rows);
            res.send(rows);
        });
    });

    app.post('/presentation', function(req, res){
        console.log('save presentation');
        console.log(req.body.presentation);
        var presentation = req.body.presentation;
        var insertQuery = "INSERT INTO presentations " +
            "( username,presentation_name,presentation_tags,presentation_aspectratio,presid) values (?,?,?,?,?)";
        connection.query(insertQuery,[
            presentation.username,
            presentation.name,
            presentation.tags,
            presentation.aspectRatio,
            presentation.presid], function(err, rows){
            if (err) throw err;
        });

    });

    app.delete('/presentation', function(req,res){
        var presentation = req.query.id;
        console.log('delete presentation' + presentation);
        var deleteQuery = 'DELETE FROM presentations \
                           WHERE id = ? \
                           LIMIT 1';
        connection.query(deleteQuery,[presentation], function(err){
            if (err) throw err;
            else console.log('delete ok');
        })
    });

    app.post('/presentationUpdate',function (req, res){
        var presentation = req.body.presentation;
        var updateQuery = 'UPDATE presentations \
            SET presentation_content=? , presentation_background=? \
            WHERE username=? and presid=?';
        connection.query(updateQuery, [
                presentation.context,
                presentation.bgcolor,
                presentation.user,
                presentation.presid
        ], function(err, rows){
            if (err) throw err;
            else console.log('update ok');
        });
    });

    app.get('/images', function(req, res) {
        console.log(req.query);
        var username = req.query.user;
        connection.query("SELECT * FROM images WHERE username = ?",[username], function(err, rows){
            if (err)
                return done(err);
            if (!rows.length) {
                return done(null, false, req.flash('imagesError', 'No images found.'));
            }

            res.send(rows);
        });
    });

    app.post('/images', function(req, res){
        console.log('save images');
        console.log(req.body.presentation);
        var presentation = req.body.presentation;
        var insertQuery = "INSERT INTO images (username, images) VALUES(?, ?) ON DUPLICATE KEY UPDATE \
                           username=VALUES(username), images=VALUES(images)";
        connection.query(insertQuery,[
            presentation.username,
            presentation.images], function(err, rows){
            if (err) throw err;
        });

    });


};