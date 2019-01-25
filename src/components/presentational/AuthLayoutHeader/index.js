// #region load dependencies
import React from 'react';
// import PropTypes from 'prop-types';
// #endregion
// #region antd
import Layout from 'antd/lib/layout';
import Avatar from 'antd/lib/avatar';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
// #endregion
// #region components
// #endregion
// #region constant
// #endregion

const {
  Header,
} = Layout;

/**
 * @file components/presentational/AuthLayoutHeader/index.js
 * @module components/presentational/AuthLayoutHeader
 * @desc This is the stateless functional component for AuthLayoutHeader.
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @return {JSX} AuthLayoutHeader component
 * @example
 * <AuthLayoutHeader />
 */
const AuthLayoutHeader = () => (
  <Header
    className="tidzo-main-header"
  >
    <Row>
      <Col span={24}>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </Col>
    </Row>
  </Header>
);

/**
 * @name AuthLayoutHeader PropTypes
 * @memberof components/presentational/AuthLayoutHeader
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @return {Array} React PropTypes
 */
AuthLayoutHeader.propTypes = {};

AuthLayoutHeader.defaultProps = {};

export default AuthLayoutHeader;
