// #region dependencies
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
// #endregion
// #region components
import UserList from './List';
// #endregion
// #region constant
import appRouter from '../../../common/constant/routerView';
// #endregion

/**
 * @file components/containers/Users/index.js
 * @class components/containers/Users
 * @extends React.Component
 * @classdesc This is the main Users component. Were all the views and controls are loaded.
 * This include the navigation layout and the route config
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @example
 * <Users />
 */
class Users extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {}

  /**
   * @function
   * @name render
   * @memberof components/containers/App
   * @description Render all components
   * @return {JSX} Components for App
   */
  render() {
    const {
      user: {
        list,
      },
    } = appRouter;
    return (
      <>
        <Switch>
          <Route
            path={list}
            component={UserList}
          />
        </Switch>
      </>
    );
  }
}

/**
 * @function
 * @name mapStateToProps
 * @memberof components/containers/Users
 * @description Set props to state
 * @param {Object} state    - list of state
 * @return {Object} state from store
 */
const mapStateToProps = () => ({});

Users.propTypes = {
  // dispatch: PropTypes.func,
};

Users.defaultProps = {
  // dispatch: '',
};

export default withRouter(connect(mapStateToProps)(Users));
