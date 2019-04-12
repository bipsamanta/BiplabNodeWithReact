/*
 *
 * EmployeeDetails reducer
 *
 */

import { fromJS } from 'immutable';
import { GET_NAMES_SUCEEDED, UPDATE_COMMON_INFO } from './constants';

export const initialState = fromJS({
  employee: {
    name: null,
    email: null,
    gender: null,
    designation: null,
    dob: null,
    Names: [],
  },
});

const getNamesSuccedded = (state, names) => {
  const newState = state
    .setIn(['employee', 'Names'], names)
    .set(['temp'], true);
  // Other features...
  return newState;
};

const updateCommonInfo = (state, commonInfo) =>
  state.mergeIn(['common'], fromJS(commonInfo));

function employeeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_NAMES_SUCEEDED:
      return getNamesSuccedded(state, action.names);
    case UPDATE_COMMON_INFO:
      return updateCommonInfo(state, action.commonInfo);
    default:
      return state;
  }
}

export default employeeReducer;
