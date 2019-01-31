// #region dependencies
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import { hot } from 'react-hot-loader';
// #endregion
// #region antd
import Layout from 'antd/lib/layout';
// #endregion
// #region components
import MainSideBar from '../../presentational/MainSideBar';
import MainHeader from '../../presentational/MainHeader';
import PartialView from '../../presentational/PartialView';
import Footers from '../../presentational/Footers';
import Users from '../Users';
// #endregion
// #region constant
import mainNavItems from '../../../common/constant/menuItems/mainNavItems';
import appRouter from '../../../common/constant/routerView';
// #endregion

/**
 * @file components/containers/Layouts/index.js
 * @class components/containers/Layouts
 * @extends React.Component
 * @classdesc This is the main layout component. Were all the views and controls are loaded.
 * This include the navigation layout and the route config
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @example
 * <Layouts>
 * </Layouts>
 */
class Layouts extends React.Component {
  constructor() {
    super();

    this.state = {
      collapsed: false,
    };
  }

  componentDidMount() {}

  toggleMenu = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed,
    }));
  }

  /**
   * @function
   * @name render
   * @memberof components/containers/Layouts
   * @description Render all components
   * @return {JSX} Components for App
   */
  render() {
    const { toggleMenu } = this;
    const { collapsed } = this.state;
    const { user: { base } } = appRouter;

    return (
      <Layout
        className="full-height"
      >
        <MainSideBar
          navItems={mainNavItems}
          collapsed={collapsed}
        />
        <Layout>
          <MainHeader
            collapsed={collapsed}
            toggleMenu={toggleMenu}
          />
          <PartialView>
            <Switch>
              <Route
                path={base}
                component={Users}
              />
            </Switch>
          </PartialView>
          <Footers
            showCopyRight
          />
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

Layouts.propTypes = {
  // dispatch: PropTypes.func,
};

Layouts.defaultProps = {
  // dispatch: '',
};

export default hot(module)(withRouter(connect(mapStateToProps)(Layouts)));
