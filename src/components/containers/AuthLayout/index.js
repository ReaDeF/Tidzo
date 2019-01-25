// #region dependencies
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
// #endregion
// #region antd
import Layout from 'antd/lib/layout';
// #endregion
// #region components
import AuthLayoutHeader from '../../presentational/AuthLayoutHeader';
import PartialView from '../../presentational/PartialView';
import Footers from '../../presentational/Footers';
import Login from '../Login';
// #endregion
// #region constant
import routerView from '../../../common/constant/routerView';
// #endregion

/**
 * @file components/containers/AuthLayout/index.js
 * @class components/containers/AuthLayout
 * @extends React.Component
 * @classdesc This is the main layout component. Were all the views and controls are loaded.
 * This include the navigation layout and the route config
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @example
 * <AuthLayout>
 * </AuthLayout>
 */
class AuthLayout extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  /**
   * @function
   * @name render
   * @memberof components/containers/Layouts
   * @description Render all components
   * @return {JSX} Components for App
   */
  render() {
    const {
      auth: {
        login,
      },
    } = routerView;

    return (
      <Layout
        className="full-height"
      >
        <Layout>
          <AuthLayoutHeader />
          <PartialView>
            <Switch>
              <Route
                exact
                path={login}
                component={Login}
              />
            </Switch>
          </PartialView>
          <Footers />
        </Layout>
      </Layout>
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

AuthLayout.propTypes = {
  // dispatch: PropTypes.func,
};

AuthLayout.defaultProps = {
  // dispatch: '',
};

export default hot(module)(withRouter(connect(mapStateToProps)(AuthLayout)));
