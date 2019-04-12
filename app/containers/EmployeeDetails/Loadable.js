/**
 *
 * Asynchronously loads the component for EmployeeDetails
 *
 */

import loadable from 'loadable-components';

export default loadable(() => import('./index'));
