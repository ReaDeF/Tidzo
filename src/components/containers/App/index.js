// #region dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
// #endregion
// #region components
// import Layouts from '../Layouts';
import AuthLayout from '../AuthLayout';
import UserService from '../../../services/user/user';
// #endregion
// #region constant
// #endregion

/**
 * @file components/containers/App/index.js
 * @class components/containers/App
 * @extends React.Component
 * @classdesc This is the main app component. Were all the views and controls are loaded.
 * This include the navigation layout and the route config
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @example
 * <App />
 */
class App extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    new UserService().recoverPassword('maru@jer.com')(dispatch);
  }

  /**
   * @function
   * @name render
   * @memberof components/containers/App
   * @description Render all components
   * @return {JSX} Components for App
   */
  render() {
    // const { user: { userMain } } = appRouter;

    return (
      // <Layouts>
      //   <Switch>
      //     <Route
      //       exact
      //       path={userMain}
      //       component={Users}
      //     />
      //   </Switch>
      // </Layouts>
      <AuthLayout />
    );
  }
}

/**
 * @function
 * @name mapStateToProps
 * @memberof components/containers/App
 * @description Set props to state
 * @param {Object} state    - list of state
 * @return {Object} state from store
 */
const mapStateToProps = () => ({});

App.propTypes = {
  dispatch: PropTypes.func,
};

App.defaultProps = {
  dispatch: '',
};

export default hot(module)(withRouter(connect(mapStateToProps)(App)));
