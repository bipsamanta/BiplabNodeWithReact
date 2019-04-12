/*
 *
 * RegisterPage actions
 *
 */

import { SAVE_USER_ACTION, SAVE_USER_FAILED_ACTION } from './constants';

export function saveUser(userInfo) {
  // Can do some codeing changes as well
  return {
    type: SAVE_USER_ACTION,
    userInfo,
  };
}

export function saveUserFalied(error) {
  return {
    type: SAVE_USER_FAILED_ACTION,
    message: error.message,
  };
}
