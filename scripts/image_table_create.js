var mysql = require('mysql');
var dbconfig = require('../config/database');

var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);

connection.query('\
CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.images_table + '`( \
    `username` VARCHAR(20) NOT NULL, \
    `images` MEDIUMTEXT, \
        PRIMARY KEY (`username`), \
    UNIQUE INDEX `id_UNIQUE` (`username` ASC) \
);');

console.log('Success: Table Created!');

connection.end();
