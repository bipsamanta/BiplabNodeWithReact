import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tableView state domain
 */

const selectTableViewDomain = state => state.get('tableView', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by TableView
 */

const makeSelectTableView = () =>
  createSelector(selectTableViewDomain, substate => substate.toJS());

export default makeSelectTableView;
export { selectTableViewDomain };
