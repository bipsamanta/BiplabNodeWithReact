const config = require('config');
const express = require('express');

const router = express.Router();
const appRoutes = require('./modules/app');

const Routes = function (app, passport, passportStrategy, helpers) {
    app.use('/', appRoutes(config, app, passport, passportStrategy, helpers));
};

module.exports = Routes;
