import { securityAct } from '../common/actions/index';
import { setToken } from '../services/security/session';


const userSession = () => next => (action) => {
  switch (action.type) {
    case securityAct.PERFORM_LOGIN: {
      if (action.session) {
        const { data } = action.session;
        const session = {
          user_info: {
            first_name: data.first_name,
            last_name: data.last_name,
            time_zone: data.time_zone,
            avatar: data.avatar,
          },
          privileges: data.privileges,
        };

        // Store the token.
        setToken(data.token);

        const loginAction = securityAct.loadUserSession(session);
        next(loginAction);
      }
      break;
    }
    default:
      next(action);
      break;
  }
};

export default userSession;
