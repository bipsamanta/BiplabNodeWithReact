import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the employeeDetails state domain
 */

export const selectEmployeeDetails = state =>
  state && state.get('employeeDetails', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by EmployeeDetails
 */

const makeSelectEmployeeDetails = () =>
  createSelector(selectEmployeeDetails, substate => substate.toJS());

const selectAvailableData = createSelector(
  [selectEmployeeDetails],
  substate => {
    if (!substate) {
      return null;
    }

    if (substate.data1) {
      return substate.data1;
    }
    if (substate.data2) {
      return substate.data1;
    }
    return null;
  },
);

export { makeSelectEmployeeDetails, selectAvailableData };
