// #region load dependencies
import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// #endregion
// #region components
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
// #endregion
const { SubMenu } = Menu;

// const getMenu = item => (
//   <Menu.Item key={item.id}>
//     <Icon type={item.icon} />
//     <Link to={item.to}>{item.label}</Link>
//   </Menu.Item>
// );

// const getSubMenu = (item, subItem) => (
//   <SubMenu key={`${item.id}${subItem.id}`} title={item.label}>
//     {
//       getMenu(subItem)
//     }
//   </SubMenu>
// );

/**
 * @file components/presentational/NavMenu/index.js
 * @module components/presentational/NavMenu
 * @desc This is the stateless functional component for NavMenu.
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @return {JSX} NavMenu component
 * @example
 * <NavMenu />
 */
// TODO:
// - add this to an iteration
// - load all the menu items by dynamically
const NavMenu = () => (
  <Menu
    className="tidzo-menu__wrapper"
    theme="dark"
    mode="inline"
    defaultSelectedKeys={['1']}
  >
    <Menu.Item key="1">
      <Icon type="home" />
      <span>
        <Link to="/">Inicio</Link>
      </span>
    </Menu.Item>
    <Menu.Divider />
    <SubMenu
      key="sub1"
      title={
        (
          <span>
            <Icon type="audit" />
            <span>Administración</span>
          </span>
        )
      }
    >
      <Menu.Item key="2">
        <Icon type="user" />
        <span>
          <Link to="/users">Usuario</Link>
        </span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="bank" />
        <span>
          <Link to="/sales-point">Puntos de Venta</Link>
        </span>
      </Menu.Item>
    </SubMenu>
    <Menu.Divider />
    <Menu.Item key="4">
      <Icon type="calendar" />
      <span>
        <Link to="/cronogramas">Cronograma</Link>
      </span>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="5">
      <Icon type="bar-chart" />
      <span>
        <Link to="/reports">Reportes</Link>
      </span>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="6">
      <Icon type="setting" />
      <span>
        <Link to="/settings">Configuración</Link>
      </span>
    </Menu.Item>
  </Menu>
);

/**
 * @name NavMenu PropTypes
 * @memberof components/presentational/NavMenu
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @param {Array} items         - Main Nav items
 * @return {Array} React PropTypes
 */
NavMenu.propTypes = {
  // items: PropTypes.array.isRequired,
};

export default NavMenu;
