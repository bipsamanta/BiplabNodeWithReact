import { createSelector } from 'reselect';
const appConfig = require('../config.json');

const ENV_AAP = 'app';
const ENV_AAP_DEV = 'app-dev';
const ENV_AAP_QA = 'app-qa';
const ENV_AAP_PROD = 'app-prod';
// const NODE_ENV_DEV = 'development';
// const DEFAULT_PROTOCOL = 'http:';

const getLocationDomain = state => ({
  hostname: window.location.hostname,
  protocol: window.location.protocol,
  pathFor: state.pathFor,
  locale: state.locale,
});

// const getPath = (protocol, url, apiVersion) => {
const getPath = (protocol, url) => {
  // const path = `${protocol}//${url}/`;
  const path = `${protocol}//${url}`;
  //   if (apiVersion) {
  //     path += `${apiVersion}`;
  //   }
  return path;
};

export const selectPath = createSelector(getLocationDomain, substate => {
    debugger; // eslint-disable-line
  const baseRoute = substate.pathFor;
  // default deployment to dev env
  let env = ENV_AAP;
  switch (substate.hostname) {
    case appConfig.hostname[ENV_AAP]:
      env = ENV_AAP;
      break;
    case 'localhost':
      env = ENV_AAP;
      break;
    case appConfig.hostname[ENV_AAP_DEV]:
      env = ENV_AAP_DEV;
      break;
    case appConfig.hostname[ENV_AAP_QA]:
      env = ENV_AAP_QA;
      break;
    case appConfig.hostname[ENV_AAP_PROD]:
      env = ENV_AAP_PROD;
      break;

    default:
      break;
  }
  //   if (process.env.NODE_ENV === NODE_ENV_DEV) {
  //     substate.protocol = DEFAULT_PROTOCOL;
  //   }
  //   return getPath(
  //     substate.protocol,
  //     appConfig[baseRoute][env],
  //     appConfig[baseRoute].apiVersion,
  //   );
  return getPath(substate.protocol, appConfig[baseRoute][env]);
});
