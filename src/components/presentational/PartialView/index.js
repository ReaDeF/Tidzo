// #region load dependencies
import React from 'react';
import PropTypes from 'prop-types';
// #endregion
// #region antd
import Layout from 'antd/lib/layout';
// #endregion
// #region components
// #endregion
// #region constant
// #endregion

const {
  Content,
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
const PartialView = ({ children }) => (
  <Content
    className="tidzo-partial-view"
  >
    {children}
  </Content>
);

/**
 * @name AvatarMenu PropTypes
 * @memberof components/presentational/AvatarMenu
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @return {Array} React PropTypes
 */
PartialView.propTypes = {
  children: PropTypes.node,
};

PartialView.defaultProps = {
  children: [],
};

export default PartialView;
