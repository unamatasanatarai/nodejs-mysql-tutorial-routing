const DB = require('./DB.js')
module.exports = function(request, response) {
    var db = new DB({
        host: 'localhost',
        user: 'root',
        password: 'pass',
        database: 'tutorial'
    });
    let results = '<table>';
    db.query('SELECT * FROM hello').then(r => {
        return new Promise((resolve, reject) => {
            let i = 0;
            for (i; i < r.length; i++) {
                results += "<tr><td>" + r[i].id + "</td><td>" + r[i].title + "</td></tr>";
            }
            resolve(results);
        })
    }).then(results => {
        response.send(results + "</table><a href='/'>go home</a>");
    });
};
