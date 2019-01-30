/**
 * @name MainNavPath
 * @memberof common/constant/mainNav
 * @type {Object}
 * @return {Object} List of items object with label, to, exact and icon properties
 */
const base = '/';
const user = '/users';
const auth = '/auth';
export default {
  base,
  user: {
    list: `${user}`,
  },
  auth: {
    base,
    login: `${auth}/login`,
    recover: {
      indication: `${auth}/recover/indication`,
      password: `${auth}/recover/password`,
    },
  },
};
