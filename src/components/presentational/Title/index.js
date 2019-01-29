// #region load dependencies
import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// #endregion
// #region components
// #endregion

/**
 * @file components/presentational/Title/index.js
 * @module components/presentational/Title
 * @desc This is the stateless functional component for Title.
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @return {JSX} Title component
 * @example
 * <Title />
 */
const Title = ({ text }) => (
  <h1 className="tidzo-title">{text}</h1>
);

/**
 * @name Title PropTypes
 * @memberof components/presentational/Title
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @param {String} text  - Title text
 * @return {Array} React PropTypes
 */
Title.propTypes = {
  text: PropTypes.string.isRequired,
};

Title.defaultProps = {};

export default Title;
