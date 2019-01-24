/**
 * @file services/security/session.js
 * @since v1.0
 * @author Mauricio Sanchez <mausadd@outlook.com>
 */

// #region Imports

import Cookies from 'universal-cookie';
import Keys from '../../common/constant/keys';

// #endregion Imports

const cookie = new Cookies();

/**
 * @function
 * @name setToken
 * @description Store the token.
 * @param {String} token The token to be stored.
 */
export const setToken = (token) => {
  cookie.set(Keys.cookieTokenKey, token, { path: '/' });
};

/**
 * @function
 * @name getToken
 * @description Gets the store token.
 * @return {String} The stored token or undefined if it does not exists.
 */
export const getToken = () => cookie.get(Keys.cookieTokenKey);
