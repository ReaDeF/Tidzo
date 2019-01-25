// #region dependencies
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// #endregion
// #region components
// #endregion
// #region constant
// #endregion

/**
 * @file components/containers/Login/index.js
 * @class components/containers/Login
 * @extends React.Component
 * @classdesc This is the main Login component. Were all the views and controls are loaded.
 * This include the navigation layout and the route config
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @example
 * <Login />
 */
class Login extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {}

  /**
   * @function
   * @name render
   * @memberof components/containers/Login
   * @description Render all components
   * @return {JSX} Components for App
   */
  render() {
    return (
      <h1>Login View</h1>
    );
  }
}

/**
 * @function
 * @name mapStateToProps
 * @memberof components/containers/Login
 * @description Set props to state
 * @param {Object} state    - list of state
 * @return {Object} state from store
 */
const mapStateToProps = () => ({});

Login.propTypes = {
  // dispatch: PropTypes.func,
};

Login.defaultProps = {
  // dispatch: '',
};

export default withRouter(connect(mapStateToProps)(Login));
