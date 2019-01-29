/**
 * @file services/security/session.js
 * @since v1.0
 * @author Mauricio Sanchez <mausadd@outlook.com>
 */

// #region Imports

import Cookies from 'universal-cookie';
import Keys from '../../common/constant/keys';

const decoder = require('jwt-decode');

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
 * @description Gets the stored token.
 * @return {String} The stored token or undefined if it does not exists.
 */
export const getToken = () => cookie.get(Keys.cookieTokenKey);

/**
 * @function
 * @name validateToken
 * @description Indicates if the provided token is valid.
 * @param {String} token The token to be validated.
 * @return {Boolean} true if the token is valid otherwise false.
 */
export const validateToken = (token) => {
  try {
    if (!token) {
      return false;
    }

    const decodedToken = decoder(token);
    const expDate = new Date(0);
    expDate.setUTCSeconds(decodedToken.exp);

    return expDate.valueOf() > new Date().valueOf();
  } catch (err) {
    return false;
  }
};

export const deleteStoredToken = () => {
  cookie.remove(Keys.cookieTokenKey);
};
