// #region load dependencies
import React from 'react';
import PropTypes from 'prop-types';
// #endregion
// #region antd
import Layout from 'antd/lib/layout';
import Icon from 'antd/lib/icon';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
// #endregion
// #region components
import AvatarMenu from '../AvatarMenu';
import Search from '../Search';
import NotifyMenu from '../NotifyMenu';
// #endregion
// #region constant
// #endregion

const {
  Header,
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
const Footers = ({ collapsed, toggleMenu }) => (
  <Header
    className="tidzo-main-header"
  >
    <Row>
      <Col span={16}>
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggleMenu}
        />
        <Search />
      </Col>
      <Col span={8}>
        <NotifyMenu />
        <AvatarMenu />
      </Col>
    </Row>
  </Header>
);

/**
 * @name AvatarMenu PropTypes
 * @memberof components/presentational/AvatarMenu
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @return {Array} React PropTypes
 */
Footers.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  collapsed: PropTypes.bool.isRequired,
};

Footers.defaultProps = {};

export default Footers;
