/**
 * @name Profile Reducer
 * @memberof module:common/reducers
 * @type {ReduxReducer}
 * @return {Object} Reducer Specification
 */
import { profileAct } from '../actions';

const initialState = {
  showInfo: false,
  info: '',
};

/**
 * @function
 * @name profile
 * @memberof module:common/reducers
 * @description show profile info
 * @param {Object} state  - reducer state
 * @param {Object} action - action context
 * @return {OBJECT} Action context
 */
const profile = (state = initialState, action) => {
  switch (action.type) {
    case profileAct.SHOW_PROFILE_INFO:
      return Object.assign({}, state, action);
    default:
      return state;
  }
};

export default profile;
