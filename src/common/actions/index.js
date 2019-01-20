/**
 * @file common/actions/index.js
 * @module common/actions
 * @desc This is the encapsulation for all actions to send to store
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @return {Object} List of actions
 */
import * as profileAct from './profile';
import * as fooAct from './foo';
import * as requestAct from './request';
import * as securityAct from './security';

export {
  profileAct, fooAct, requestAct, securityAct,
};
