
const express = require('express');

const router = express.Router();

//const Logger = require('logstash-encoder');

//const logger = new Logger({ filename: __filename });

const USER = function USER(helpers) {
    return (req, res, next) => {
        //logger.info(`Do we have user? ${req.user}`);
        if (!req.user) {
            //res.redirect(`/${helpers.locale.getFullLocale()}/login`);
            res.redirect(`/login`);
        } else if (req.isAuthenticated()) {
            //logger.info(`user? ${req.user}`);
            next();
        }
    };
};

module.exports = USER;

