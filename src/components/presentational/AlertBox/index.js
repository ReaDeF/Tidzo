// #region load dependencies
import React from 'react';
import PropTypes from 'prop-types';
// #endregion
// #region components
import Title from '../Title';
// #endregion

/**
 * @file components/presentational/AlertBox/index.js
 * @module components/presentational/AlertBox
 * @desc This is the stateless functional component for AlertBox.
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @return {JSX} AlertBox component
 * @example
 * <AlertBox />
 */
const AlertBox = ({ isList, list }) => (
  <>
    <Title text="¿No has recibido nuestro correo?" />
    {
      isList && (
        <ol>
          {
            list.map(({ text }) => (
              <li>{text}</li>
            ))
          }
        </ol>
      )
    }
  </>
);

/**
 * @name AlertBox PropTypes
 * @memberof components/presentational/AlertBox
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @return {Array} React PropTypes
 */
AlertBox.propTypes = {
  isList: PropTypes.bool,
  list: PropTypes.array,
};

AlertBox.defaultProps = {
  isList: false,
  list: [],
};

export default AlertBox;
