const LocalStrategy = require('passport-local').Strategy;
const session = require('express-session');
const cookieParser = require('cookie-parser');
const config = require('config');
//const Logger = require('logstash-encoder');

//const logger = new Logger({ filename: __filename });


const PassportStrategy = function PassportStrategy(app, passport, helpers) {
    const passportStrategy = {
        init: () => {
            // passport session helpers
            passport.serializeUser((user, done) => {
                done(null, user);
            });
            passport.deserializeUser((user, done) => {
                done(null, user);
            });

            app.use(cookieParser('biplab'));
            app.set('trust proxy', 1); // trust first proxy
            app.use(session({
                secret: 'biplab',
                //cookie: { expires: app.config.ssoConfig.sessionLength, secure: true },
                resave: true,
                rolling: true,
                saveUninitialized: true,
                name: 'SSIONID',
            }));
            app.use(passport.initialize());
            app.use(passport.session());

            passportStrategy.setUserStrategy();
        },
        setUserStrategy: () => {
            //logger.info('Have user?');
            passport.use('user', new LocalStrategy(
                {
                    usernameField: 'userName',
                    passwordField: 'password',
                }, (userName, password, done) => {
                    const user = {
                        userName,
                        password,
                    };
                    //logger.info(`we have user? ${userName}`);
                    return done(null, user);
                },
            ));
        },
        updateUserStrategy: (req, res, next) => {
            const user = {
                userName: 'biplab',
                password: 'biplab',
            }
            req.user = user;
            passportStrategy.setUserStrategy();
            next();
        },
    };
    return passportStrategy;
};

module.exports = PassportStrategy;
