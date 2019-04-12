import { fromJS } from 'immutable';
import modalConductorReducer from '../reducer';

describe('modalConductorReducer', () => {
  it('returns the initial state', () => {
    expect(modalConductorReducer(undefined, {})).toEqual(fromJS({}));
  });
});
