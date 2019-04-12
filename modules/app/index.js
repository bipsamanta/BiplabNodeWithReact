const path = require('path');
const express = require('express');
const customMiddlewares = require('./middlewares');

const router = express.Router();

module.exports = (config, app, passport, passportStrategy, helpers) => {
  const app_biplab_react_path = 'build';
  app.use(express.static(app_biplab_react_path));

  // app.use('/login',
  //     helpers.locale.setLocale,
  //     helpers.locale.setHostConfig,
  //     passportStrategy.updateUserStrategy,
  //     passport.authenticate('user', { failureRedirect: '/', session: true }),
  //     customMiddlewares.USER(helpers)
  // );

  // * catch all *//
  app.use(
    helpers.locale.setLocale,
    helpers.locale.setHostConfig,
    // customMiddlewares.USER(helpers),
    express.static(app_biplab_react_path),
  );
  // * catch all *//
  app.use('/*',
    helpers.locale.setLocale,
    helpers.locale.setHostConfig,
    // customMiddlewares.USER(helpers),
    express.static(app_biplab_react_path),
  );
  return router;
};
