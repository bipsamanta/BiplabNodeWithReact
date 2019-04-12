/**
 *
 * Asynchronously loads the component for TableView
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
