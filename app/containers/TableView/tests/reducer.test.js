import { fromJS } from 'immutable';
import tableViewReducer from '../reducer';

describe('tableViewReducer', () => {
  it('returns the initial state', () => {
    expect(tableViewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
