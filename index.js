const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const config = require('config');
const i18n = require('i18n');
const passport = require('passport');
const contentLength = require('content-length');
const cookieParser = require('cookie-parser');
const Routes = require('./routes');


const app = express();
app.config = config;


const helpers = require('./modules/app/helpers')(app, i18n);
const passportStrategy = require('./modules/app/user/passport')(app, passport, helpers);


i18n.configure({
    // setup different locale
    locales: ['en', 'fr'],

    // sets a custom cookie name to parse locale settings from
    cookie: 'biplocale',

    defaultLocale: 'en',
});

// Need to use cookieParser to expose cookies to req.cookies
app.use(cookieParser());

// i18n init parses req for language headers, cookies, etc.
app.use(i18n.init);

// Initializing Logger and Assembler;
// Loggers.Initialize(config);
// Assembler.Initialize(config);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

passportStrategy.init();

// Routes(app);

Routes(app, passport, passportStrategy, helpers);

const httpServer = http.createServer(app);
const port = process.env.PORT || 3000;
httpServer.listen(port, () => {
    console.log('Example app listening on port 3000!');
});

module.exports = app;
