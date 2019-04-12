/*
 *
 * ModalConductor actions
 *
 */

import { OPEN_MODAL, CLOSE_MODAL } from './constants';

export const open = (name, props = {}) => ({
  type: OPEN_MODAL,
  name,
  props,
});

export const close = () => ({
  type: CLOSE_MODAL,
});
