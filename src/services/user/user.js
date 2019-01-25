/**
 * @file services/security/user.js
 * @since v1.0
 * @author Mauricio Sanchez <mausadd@outlook.com>
 */

// #region Imports

import BaseService from '../base/index';
import { userAct } from '../../common/actions/index';
import settings from '../../common/constant/setting';
import { userUrls } from '../../common/constant/apiUrl';

// #endregion

class UserService extends BaseService {
  defaultFilter = {
    pageSize: settings.defaultPageSize,
    page: 1,
  };

  /**
  * @function
  * @name loadUsers
  * @description Perform login with the provided credentials.
  * @param {OBJECT} filter User credentials for user authentication.
  * @param {OBJECT} filter.pagination Contains pagination information to be applied.
  * @param {Number} filter.pagination.page_size The number of records contained in every page.
  * @param {Number} filter.pagination.page The requeste page.
  * @param {OBJECT} filter.discriminant Contains the filters to be applied over the records.
  * @param {String} filter.discriminant.job_title The job title to be applied as filter.
  * @param {String} filter.discriminant.point_of_sale The point of sale to be applied as filter.
  * @param {String} filter.discriminant.date_of_admission The admission date to be applied.
  * @param {String} filter.discriminant.leaving_date The leaving date to be applied as filter.
  * @param {String} filter.discriminant.status The status to be applied as filter over the records.
  */
   loadUsers = filter => async (dispatch) => {
     const filterToApply = filter || this.defaultFilter;
     const response = await this.post(userUrls.list, filterToApply)(dispatch);

     if (response) {
       dispatch(userAct.loadUsers(response.data));
     }
   }
}

export default UserService;
