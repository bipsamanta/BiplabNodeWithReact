import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';

import * as apis from 'utils/apis';
import showError from 'global-components/errors';
import { SAVE_USER_ACTION } from './constants';
import { saveUserFalied } from './actions';

export function* requestSaveUser(action) {
  try {
    const payload = {
      userName: action.userInfo.userName,
      password: action.userInfo.password,
    };
    yield call(apis.register, payload);
    yield put(push(`/login`));
  } catch (error) {
    yield showError(error, saveUserFalied(error));
  }
}

export default function* registerPageSaga() {
  yield takeLatest(SAVE_USER_ACTION, requestSaveUser);
}
