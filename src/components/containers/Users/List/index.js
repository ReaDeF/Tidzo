// #region dependencies
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// #endregion
// #region components
import Toolbar from '../../../presentational/Toolbar';
// #endregion
// #region constant
// #endregion

/**
 * @file components/containers/UsersList/index.js
 * @class components/containers/UsersList
 * @extends React.Component
 * @classdesc This is the main UsersList component. Were all the views and controls are loaded.
 * This include the navigation layout and the route config
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @example
 * <UsersList />
 */
class UsersList extends React.Component {
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
    return (
      <Toolbar />
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

UsersList.propTypes = {
  // dispatch: PropTypes.func,
};

UsersList.defaultProps = {
  // dispatch: '',
};

export default withRouter(connect(mapStateToProps)(UsersList));
