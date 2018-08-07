const express = require('express');
const app = express();
app.get('/', (req, res) => require('./getHome.js')(req, res));
app.get('/hello', (req, res) => require('./getHello.js')(req, res));
app.listen('8080', '0.0.0.0');
