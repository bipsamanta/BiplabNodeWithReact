import { call, takeLatest, put, select } from 'redux-saga/effects';
import Cookies from 'universal-cookie';
import { push } from 'react-router-redux';
import * as apis from 'utils/apis';
import { GET_NAMES, EMP_LOGIN } from './constants';
import { getNamesSuccedded } from './actions';
import { selectEmployeeDetails } from './selectors';

export function* requestnames(action) {
  try {
    const resp = yield call(apis.getNames);
    yield put(getNamesSuccedded(resp));
  } catch (error) {
    // yield displayError(error, requestPeerSavingsFailed(error));
  }
}

export function* requestEmployeeLogin(action) {
  try {
    const resp = yield call(apis.employeeLogin, action.userInfo);
    // localStorage.setItem('token', resp.token);
    const cookies = new Cookies();
    cookies.set('token', resp.token);
    yield put(push(`/`));
  } catch (error) {
    // yield displayError(error, requestPeerSavingsFailed(error));
  }
}

export function* requestSavenames(action) {
  try {
    // Get data from reducer through selector
    const employeeDetails = yield select(selectEmployeeDetails);
    // Get data from object
    const tempName = employeeDetails.getIn(['name', 'name1', 'name2']);
    // save data
    const payload = {};
    yield call(apis.employeeLogin, payload);
    // redirect to different page
    yield put(push(`/${action.locale}/abcd/efgh/${action.nextStep}`));
  } catch (error) {
    // yield displayError(error, requestPeerSavingsFailed(error));
  }
}

export default function* employeeData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(EMP_LOGIN, requestEmployeeLogin);
  yield takeLatest(GET_NAMES, requestnames);
}
