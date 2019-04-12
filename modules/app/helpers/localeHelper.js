const LocaleHelper = function LocaleHelper(app, i18n) {
    let hostConfig = 'default';

    const localeHelper = {
        getLocaleFromHost: (host) => {
            let locale = 'en';
            if (host.indexOf('samplewebsite.com') > -1) {
                locale = 'fr';
            }
            return locale;
        },
        setHostConfig: (req, res, next) => {
            if (req) {
                const host = req.get('host');
                const rx = /(samplewebsite\.com|samplewebsite\.com)/i;

                if (rx.test(host)) {
                    hostConfig = `custom.${localeHelper.getLocale()}`;
                } else {
                    hostConfig = 'default';
                }
            }
            next();
        },
        getHostConfig: () => hostConfig,
        getLocale: () => i18n.getLocale(),
        getFullLocale: () => `${i18n.getLocale()}-CA`,
        setLocale: (req, res, next) => {
            if (req) {
                const locale = localeHelper.getLocaleFromHost(req.get('host'));
                if (locale) {
                    i18n.setLocale(locale);
                } else {
                    i18n.setLocale('en');
                }
            }
            next();
        },
    };

    return localeHelper;
};

module.exports = LocaleHelper;
