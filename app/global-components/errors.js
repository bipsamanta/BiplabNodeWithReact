import { put } from 'redux-saga/effects';
import { open as openModal } from 'containers/ModalConductor/actions';
import { SNACKBAR_POPUP } from 'containers/ModalConductor/constants';

const getErrorMessage = error => {
  if (error.response.status === 100) {
    return 'Have issue';
  }
  return 'An unknown error has occured, please check your connection';
};

export default function* showError(error, action) {
  yield put(
    openModal(SNACKBAR_POPUP, {
      content: getErrorMessage(error),
      messageType: 'error',
      action,
    }),
  );
}
