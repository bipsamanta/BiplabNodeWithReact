// const serversConfig = require(`../env/${process.env.NODE_ENV}/servers-config`);
const serversConfig = require('../env/dev/servers-config');

module.exports = function (config) {
    const apiServer = serversConfig.apiServer;
    return {
        endpoints: [{
            name: 'api',
            type: 'request',
            target: apiServer,
        },
        ],
    };
};
