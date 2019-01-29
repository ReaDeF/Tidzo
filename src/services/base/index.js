/**
 * @file Services/base/index.js
 * @class BaseService
 * @classdesc Interface to comunicate with the API.
 * @since v1.0
 * @author Mauricio Sanchez <mausadd@outlook.com>
 */

// #region Imports

import request from 'superagent';
import { getToken, validateToken, deleteStoredToken } from '../security/session';
import { requestAct } from '../../common/actions/index';

// #endregion Imports

export default class BaseService {
  defaultHeaders = {
    Accept: 'appliction/json',
    'Content-Type': 'application/json',
  };

  /**
   * @function
   * @name _getHeaders
   * @memberof BaseService
   * @description Compose the request headers, including the authorization token.
   * @param {OBJECT} defaultHeaders Default headers overridden by particular headers provided.
   * @param {OBJECT} userHeaders Particular headers for a request.
   * @param {String} token Authorization token if the user is logged-in.
   * @return {OBJECT} The definitive headers to be used in a request.
   */
  _getHeaders = (defaultHeaders, userHeaders, token) => {
    if (!userHeaders) return defaultHeaders;
    const headers = Object.assign(defaultHeaders, userHeaders);

    if (token) {
      if (validateToken(token)) {
        headers.Authorization = token;
      } else {
        deleteStoredToken();
      }
    }

    return headers;
  };

  /**
   * @function
   * @name get
   * @memberof BaseService
   * @description Function to perform a get request to the API.
   * @param {String} url The URL path pointing to an specific resource in the API.
   * @param {OBJECT} query An string or an object that represent the query string for a request.
   * @param {OBJECT} headers Specific headers to be sent in a request.
   * @return {OBJECT} Response sent by the API.
   */
  get = (url, query, headers) => async (dispatch) => {
    try {
      dispatch(requestAct.startRequest(query));

      const response = await request
        .get(url)
        .query(query)
        .set(this._getHeaders(this.defaultHeaders, headers, getToken()));

      if (Object.prototype.hasOwnProperty.call(response, 'error') && response.error) {
        throw response.error;
      }

      dispatch(requestAct.endRequest(null));
      return response.body;
    } catch (err) {
      dispatch(requestAct.endRequest(err));
      return null;
    }
  }

  /**
   * @function
   * @name post
   * @memberof BaseService
   * @description Function to perform a post request to the API.
   * @param {String} url The URL path pointing to an specific resource in the API.
   * @param {OBJECT} data the data to be sent to the endpoint.
   * @param {OBJECT} headers Specific headers to be sent in a request.
   * @return {OBJECT} Response sent by the API.
   */
  post = (url, data, headers) => async (dispatch) => {
    try {
      dispatch(requestAct.startRequest(data));

      const combinedHeaders = this._getHeaders(this.defaultHeaders, headers, getToken());
      const response = await request
        .post(url)
        .set(combinedHeaders)
        .send(data);

      if (Object.prototype.hasOwnProperty.call(response, 'error') && response.error) {
        throw response.error;
      }

      dispatch(requestAct.endRequest(null));
      return response.body;
    } catch (err) {
      dispatch(requestAct.endRequest(err));
      return null;
    }
  }
}
