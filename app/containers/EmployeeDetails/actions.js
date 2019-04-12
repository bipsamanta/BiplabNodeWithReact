/*
 *
 * EmployeeDetails actions
 *
 */

import {
  DEFAULT_ACTION,
  SAVE_EMPLOYEE_INFORMATION,
  GET_NAMES,
  EMP_LOGIN,
  GET_NAMES_SUCEEDED,
} from './constants';

export const saveEmployeeInformation = () => ({
  type: SAVE_EMPLOYEE_INFORMATION,
});

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getNames() {
  return {
    type: GET_NAMES,
  };
}

export function employeeLogin(userInfo) {
  // Can do some codeing changes as well
  return {
    type: EMP_LOGIN,
    userInfo,
  };
}
export function getNamesSuccedded(resp) {
  // Can do some codeing changes as well
  return {
    type: GET_NAMES_SUCEEDED,
    names: resp,
  };
}
export function updateCommonInfo(commonInfo) {
  // Can do some codeing changes as well
  return {
    type: GET_NAMES_SUCEEDED,
    commonInfo,
  };
}
