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
function Title({ text, heading }) {
  switch (heading) {
    case 1:
      return <h1 className="tidzo-heading-one">{text}</h1>;
    case 2:
      return <h2 className="tidzo-heading-two">{text}</h2>;
    case 3:
      return <h3 className="tidzo-heading-three">{text}</h3>;
    case 4:
      return <h4 className="tidzo-heading-four">{text}</h4>;
    default:
      return <h1 className="tidzo-heading-one">{text}</h1>;
  }
}

/**
 * @name Title PropTypes
 * @memberof components/presentational/Title
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @param {String} text  - Title text
 * @param {Number} number  - Headline level
 * @return {Array} React PropTypes
 */
Title.propTypes = {
  text: PropTypes.string.isRequired,
  heading: PropTypes.number,
};

Title.defaultProps = {
  heading: 1,
};

export default Title;
