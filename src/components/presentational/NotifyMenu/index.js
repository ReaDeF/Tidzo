// #region load dependencies
import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// #endregion
// #region components
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
// #endregion
const { SubMenu, MenuItemGroup } = Menu;

/**
 * @file components/presentational/NotifyMenu/index.js
 * @module components/presentational/NotifyMenu
 * @desc This is the stateless functional component for NotifyMenu.
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @return {JSX} NotifyMenu component
 * @example
 * <NotifyMenu />
 */
const NotifyMenu = ({ handleClick }) => (
  <Menu
    onClick={handleClick}
    mode="horizontal"
  >
    <SubMenu title={
        (
          <span>
            <Icon type="bell" />
            <Icon type="check-circle" />
          </span>
        )
      }
    >
      <MenuItemGroup title="Item 1">
        <Menu.Item key="setting:1">Option 1</Menu.Item>
        <Menu.Item key="setting:2">Option 2</Menu.Item>
      </MenuItemGroup>
      <MenuItemGroup title="Item 2">
        <Menu.Item key="setting:3">Option 3</Menu.Item>
        <Menu.Item key="setting:4">Option 4</Menu.Item>
      </MenuItemGroup>
    </SubMenu>
  </Menu>
);

/**
 * @name NotifyMenu PropTypes
 * @memberof components/presentational/NotifyMenu
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @return {Array} React PropTypes
 */
NotifyMenu.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

NotifyMenu.defaultProps = {};

export default NotifyMenu;
