/**
 * @name Security Action
 * @memberof module:common/actions
 * @type {ReduxAction}
 * @return {Object} Action schema
 */

// #region Actions

export const PERFORM_LOGIN = 'PERFORM_LOGIN';
export const LOAD_USER_SESSION = 'LOAD_USER_SESSION';

// #endregion

// #region Action Creators

export const performLogin = session => ({
  type: PERFORM_LOGIN,
  session,
});

export const loadUserSession = session => ({
  type: LOAD_USER_SESSION,
  session,
});

// #endregion
