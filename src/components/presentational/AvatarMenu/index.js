// #region load dependencies
import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// #endregion
// #region components
import Dropdown from 'antd/lib/dropdown';
import Menu from 'antd/lib/menu';
import Avatar from 'antd/lib/avatar';
// #endregion

const Menus = () => (
  <Menu>
    <Menu.Item>menu item</Menu.Item>
    <Menu.Item>menu item</Menu.Item>
    <Menu.Item>Cerrar Sesion</Menu.Item>
  </Menu>
);

/**
 * @file components/presentational/AvatarMenu/index.js
 * @module components/presentational/AvatarMenu
 * @desc This is the stateless functional component for AvatarMenu.
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @return {JSX} AvatarMenu component
 * @example
 * <AvatarMenu />
 */
const AvatarMenu = () => (
  <Dropdown overlay={Menus}>
    <a className="ant-dropdown-link" href="##">
      <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      <span>CAMILO MENDIETA</span>
      <span>Administrador</span>
    </a>
  </Dropdown>
);

/**
 * @name AvatarMenu PropTypes
 * @memberof components/presentational/AvatarMenu
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @return {Array} React PropTypes
 */
AvatarMenu.propTypes = {};

AvatarMenu.defaultProps = {};

export default AvatarMenu;
