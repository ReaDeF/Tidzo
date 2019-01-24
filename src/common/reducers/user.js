/**
 * @name User Reducer
 * @memberof module:common/reducers
 * @type {ReduxReducer}
 * @return {Object} Reducer Specification
 */

// #region Imports

import { userAct } from '../actions/index';

// #endregion

const initialState = {
  users: {},
};

/**
* @function
* @name users
* @description Users reduder involved in login process.
* @param {Object} state  - reducer state
* @param {Object} action - action context
* @return {OBJECT} Action context
*/
const users = (state = initialState, action) => {
  switch (action.type) {
    case userAct.LOAD_USERS:
      return Object.assign({}, state, action);
    default:
      return state;
  }
};

export default users;
