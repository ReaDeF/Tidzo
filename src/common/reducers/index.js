/**
 * @file common/reducers/index.js
 * @module common/reducers
 * @desc This is the encapsulation for all reducers
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @return {Object} List of reducers combined
 */
import { combineReducers } from 'redux';
import profile from './profile';
import session from './session';
import user from './user';

const app = combineReducers({
  profile,
  session,
  user,
});

export default app;
