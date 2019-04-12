/*
 *
 * LoginPage actions
 *
 */

import { LOGIN_ACTION, LOGIN_FAILED_ACTION } from './constants';

export function requestLogin(userData) {
  // Can do some codeing changes as well
  return {
    type: LOGIN_ACTION,
    userData,
  };
}
export function requestLoginFailed(error) {
  return {
    type: LOGIN_FAILED_ACTION,
    message: error.message,
  };
}
