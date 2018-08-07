const mysql = require('mysql');
module.exports = class DB {
    constructor(config) {
        this.connection = mysql.createConnection(config);
    }
    query(sql, args) {
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, rows, fields) => {
                if (err) {
                    return reject(err);
                }
                resolve(rows);
            });
        });
    }
}
