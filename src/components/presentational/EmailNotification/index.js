// #region load dependencies
import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// #endregion
// #region antd
import {
  Icon,
} from 'antd';
// #endregion
// #region components
import Title from '../Title';
import AlertBox from '../AlertBox';
// #endregion

const listStep = [
  { text: 'Revisa en tu bandeja de Mensajes no deseados' },
  { text: 'Solicita ayuda aquí' },
];
/**
 * @file components/presentational/EmailNotification/index.js
 * @module components/presentational/EmailNotification
 * @desc This is the stateless functional component for EmailNotification.
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @return {JSX} EmailNotification component
 * @example
 * <EmailNotification />
 */
const EmailNotification = () => (
  <>
    <Icon type="notification" />
    <Title text="¡Correo enviado!" />
    <p>
      {
        `Revisa la bandeja de entrada de tu correo electrónico y sigue 
        las indicaciones para reestablecer tu contraseña`
      }
    </p>
    <AlertBox
      isList
      list={listStep}
    />
  </>
);

/**
 * @name EmailNotification PropTypes
 * @memberof components/presentational/EmailNotification
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @return {Array} React PropTypes
 */
EmailNotification.propTypes = {};

EmailNotification.defaultProps = {};

export default EmailNotification;
