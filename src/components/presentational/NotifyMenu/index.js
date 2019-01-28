// #region load dependencies
import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// #endregion
// #region components
import Dropdown from 'antd/lib/dropdown';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
import Badge from 'antd/lib/badge';
// #endregion

const Menus = () => (
  <Menu>
    <Menu.Item>menu item</Menu.Item>
    <Menu.Item>menu item</Menu.Item>
    <Menu.Item></Menu.Item>
  </Menu>
);

/**
 * @file components/presentational/NotifyIcon/index.js
 * @module components/presentational/NotifyIcon
 * @desc This is the stateless functional component for NotifyIcon.
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @return {JSX} NotifyIcon component
 * @example
 * <NotifyIcon />
 */
const NotifyIcon = () => (
  <Dropdown overlay={Menus}>
    <a className="user-notifications ant-dropdown-link" href="##">
      <span>
        <Badge dot><Icon type="bell" /></Badge>
      </span>
    </a>
  </Dropdown>
);

/**
 * @name AvatarMenu PropTypes
 * @memberof components/presentational/NotifyIcon
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @return {Array} React PropTypes
 */
NotifyIcon.propTypes = {};

NotifyIcon.defaultProps = {};

export default NotifyIcon;
