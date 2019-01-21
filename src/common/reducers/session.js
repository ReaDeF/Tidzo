/**
 * @name Session Reducer
 * @memberof module:common/reducers
 * @type {ReduxReducer}
 * @return {Object} Reducer Specification
 */

// #region Imports

import { securityAct } from '../actions/index';

// #endregion

const initialState = {
  session: {},
};

/**
* @function
* @name session
* @description Session reduder involved in login process.
* @param {Object} state  - reducer state
* @param {Object} action - action context
* @return {OBJECT} Action context
*/
const session = (state = initialState, action) => {
  switch (action.type) {
    case securityAct.LOAD_USER_SESSION:
      return Object.assign({}, state, action);
    default:
      return state;
  }
};

export default session;
