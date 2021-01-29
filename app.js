const express = require('express');
const path = require('path');

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const flash = require('connect-flash');

const session = require('express-session');

const app = express();
const routes = require('./routes/index');

const upload = require('express-fileupload');

app.use(upload());
app.use(flash());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//app.set(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/', routes);

app.use((req, res, next) => {
    res.status(404).render('404');
});
    

module.exports = app;