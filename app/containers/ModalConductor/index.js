/**
 *
 * ModalConductor
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { compose } from 'redux';

import injectReducer from 'utils/injectReducer';
import { SNACKBAR_POPUP } from 'containers/ModalConductor/constants';
import { SnackbarsPopup } from 'components/Modals';
import { getModal } from './selectors';
import reducer from './reducer';

const MODAL_COMPONENTS = {
  [SNACKBAR_POPUP]: SnackbarsPopup,
  /* other modals */
};

const ModalConductor = props => {
  const ModalComponent = MODAL_COMPONENTS[props.name];

  if (typeof ModalComponent === 'undefined') return null;
  return <ModalComponent {...props.modalProps} />;
};

ModalConductor.propTypes = {
  name: PropTypes.oneOf([...Object.keys(MODAL_COMPONENTS)]),
  modalProps: PropTypes.object,
};
ModalConductor.defaultProps = {
  name: null,
  modalProps: {},
};

const mapStateToProps = createSelector(getModal, modal => ({
  name: modal.name,
  modalProps: modal.props,
}));

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'modalConductor', reducer });

export default compose(
  withReducer,
  withConnect,
)(ModalConductor);
