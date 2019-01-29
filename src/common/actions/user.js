/**
 * @name User Action
 * @memberof module:common/actions
 * @type {ReduxAction}
 * @return {Object} Action schema
 */

// #region Actions.

export const LOAD_USERS = 'LOAD_USERS';

// #endregion

// #region Action Creators

export const loadUsers = users => ({
  type: LOAD_USERS,
  users,
});

// #endregion
