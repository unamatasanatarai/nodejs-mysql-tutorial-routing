'use strict';
let mysql = require('mysql');
let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'tutorial'
});
conn.connect(function(err) {
    if (err) {
        return console.error(err.message);
    }
});
let create = 'create table if not exists hello(id int primary key auto_increment, title varchar(200) null)';
conn.query(create, function(err, rrres, fields) {
    if (err) {
        console.error(err.message);
    }
});
let i = 0;
for (i; i < 100; i++) {
    conn.query('insert into hello(title) values("this is working ' + i + '")');
}
conn.end();
