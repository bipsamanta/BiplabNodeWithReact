/*
 *
 * lump sum modal reducer
 *
 */

import { fromJS } from 'immutable';
import { OPEN_MODAL, CLOSE_MODAL } from './constants';

const initialState = fromJS({
  name: null,
  props: {},
});

// TODO fix SONAR rule - Move parameter "state" after parameters without default value
function modalReducer(state = initialState, { type, name = null, props = {} }) {
  // NOSONAR
  switch (type) {
    case OPEN_MODAL:
      return state.set('name', name).set('props', fromJS(props));

    case CLOSE_MODAL:
      return state.set('name', null).set('props', fromJS({}));

    default:
      return state;
  }
}

export default modalReducer;
