/**
 * @file services/security/login.js
 * @since v1.0
 * @author Mauricio Sanchez <mausadd@outlook.com>
 */

// #region Imports

import BaseService from '../base/index';
import { securityUrls } from '../../common/constant/apiUrl';
import { securityAct } from '../../common/actions/index';

// #endregion

class LoginService extends BaseService {
    /**
     * @function
     * @name login
     * @description Perform login with the provided credentials.
     * @param {OBJECT} credentials User credentials for user authentication.
     */
    login = credentials => async (dispatch) => {
      const data = JSON.stringify(credentials);
      const response = await this.post(securityUrls.login, data)(dispatch);

      if (response) {
        dispatch(securityAct.performLogin(response));
      }
    }
}

export default LoginService;
