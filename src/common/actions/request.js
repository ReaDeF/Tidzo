/**
 * @name Request Action
 * @memberof module:common/actions
 * @type {ReduxAction}
 * @return {Object} Action Schema
 */

// #region Actions

export const START_REQUEST = 'START_REQUEST';
export const END_REQUEST = 'END_REQUEST';

// #endregion

// #region Actions Creators

export const startRequest = payload => ({
  type: START_REQUEST,
  payload,
});

export const endRequest = err => ({
  type: END_REQUEST,
  err,
});

// #endregion
