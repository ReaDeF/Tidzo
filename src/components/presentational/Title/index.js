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
const Title = ({ text, subheadline }) => (
  subheadline ? <h1 className="tidzo-heading-two">{text}</h1> : <h1 className="tidzo-heading-one">{text}</h1>
);

/**
 * @name Title PropTypes
 * @memberof components/presentational/Title
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @param {String} text  - Title text
 * @param {boolean} bool  - Is a sub headline?
 * @return {Array} React PropTypes
 */
Title.propTypes = {
  text: PropTypes.string.isRequired,
  subheadline: PropTypes.bool,
};

Title.defaultProps = {
  subheadline: false,
};

export default Title;
