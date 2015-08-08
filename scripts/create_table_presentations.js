var mysql = require('mysql');
var dbconfig = require('../config/database');

var connection = mysql.createConnection(dbconfig.connection);

connection.query('USE ' + dbconfig.database);

connection.query('\
CREATE TABLE `' + dbconfig.database + '`.`' + dbconfig.presentation_table + '`( \
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT, \
    `presid` INT UNSIGNED NOT NULL , \
    `username` VARCHAR(20) NOT NULL, \
    `presentation_name` CHAR(60) NOT NULL, \
    `presentation_tags` CHAR(60), \
    `presentation_content` MEDIUMTEXT , \
    `presentation_aspectratio` CHAR(10) NOT NULL, \
    `presentation_background` CHAR(10) NOT NULL, \
        PRIMARY KEY (`id`), \
    UNIQUE INDEX `id_UNIQUE` (`id` ASC) \
);');

console.log('Success: Table Created!');

connection.end();