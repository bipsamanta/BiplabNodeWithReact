import { fromJS } from 'immutable';
import employeeDetailsReducer from '../reducer';

describe('employeeDetailsReducer', () => {
  it('returns the initial state', () => {
    expect(employeeDetailsReducer(undefined, {})).toEqual(fromJS({}));
  });
});
