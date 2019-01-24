// #region load dependencies
import React from 'react';
import PropTypes from 'prop-types';
// #endregion
// #region components
import Layout from 'antd/lib/layout';
import Icon from 'antd/lib/icon';
import NavMenu from '../NavMenu';
// #endregion
// #region constant
// #endregion

const {
  Sider,
} = Layout;

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
const Footers = ({ navItems, collapsed }) => (
  <Sider
    className="tidzo-menu"
    trigger={null}
    collapsible
    collapsed={collapsed}
  >
    <NavMenu items={navItems} />
    <span className="need-support">
      <Icon type="question-circle" />
      <span>Necesito soporte</span>
    </span>
  </Sider>
);

/**
 * @name AvatarMenu PropTypes
 * @memberof components/presentational/AvatarMenu
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @return {Array} React PropTypes
 */
Footers.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  navItems: PropTypes.array.isRequired,
};

Footers.defaultProps = {};

export default Footers;
