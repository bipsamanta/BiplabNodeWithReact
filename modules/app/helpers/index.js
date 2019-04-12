const locale = require('./localeHelper');
const { Config } = require('cloud-foundry-config-client');

const Helpers = function Helpers(app, i18n) {
    return {
        locale: locale(app, i18n),

        buildCacheObject: (req) => {

            const {
                GlobalFlags
            } = Config.current;
            const sessionData = {
                token: req.Token,
                loginInfo: {
                    name: 'Biplab',
                    email: 'bipsamanta@hotmail.com'// or ppopulate from GlobalFlags
                }
            };

            return sessionData;
        },
    };
};

module.exports = Helpers;
