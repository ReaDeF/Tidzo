// #region load dependencies
import React from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// #endregion
// #region components
import Menu from 'antd/lib/menu';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Layout from 'antd/lib/layout';
import Icon from 'antd/lib/icon';
import Avatar from 'antd/lib/avatar';
// #endregion

const {
  Footer,
} = Layout;

/**
 * @file components/presentational/Footers/index.js
 * @module components/presentational/Footers
 * @desc This is the stateless functional component for Footers.
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @return {JSX} Footers component
 * @example
 * <Footers />
 */
const Footers = () => (
  <Footer
    className="tidzo-footer"
  >
    <Row>
      <Col span={16}>
        <Menu mode="horizontal">
          <Menu.Item key="1">Condiciones de uso</Menu.Item>
          <Menu.Item key="2">Uso de cookies</Menu.Item>
          <Menu.Item key="3">Política de privacidad</Menu.Item>
        </Menu>
      </Col>
      <Col span={8}>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Icon
          type="copyright"
        />
        <span>Tidzo App</span>
      </Col>
    </Row>
  </Footer>
);

/**
 * @name AvatarMenu PropTypes
 * @memberof components/presentational/Footers
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @return {Array} React PropTypes
 */
Footers.propTypes = {};

Footers.defaultProps = {};

export default Footers;
