// #region load dependencies
import React from 'react';
import PropTypes from 'prop-types';
// #endregion
// #region atnd
import {
  Row,
  Col,
  Table,
} from 'antd';
// #endregion
// #region components
// #endregion

/**
 * @file components/presentational/Toolbar/index.js
 * @module components/presentational/Toolbar
 * @desc This is the stateless functional component for Toolbar.
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @return {JSX} Toolbar component
 * @example
 * <Toolbar />
 */
const Grid = ({
  columns,
  data,
  handleOnchange,
  rowSelection,
  showPagination,
}) => (
  <Row className="tidzo-list-table">
    <Col span={24}>
      <Table
        columns={columns}
        dataSource={data}
        onChange={handleOnchange}
        rowSelection={rowSelection}
        pagination={showPagination}
      />
    </Col>
  </Row>
);

/**
 * @name Toolbar PropTypes
 * @memberof components/presentational/Toolbar
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @return {Array} React PropTypes
 */
Grid.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  handleOnchange: PropTypes.func.isRequired,
  rowSelection: PropTypes.object,
  showPagination: PropTypes.bool,
};

Grid.defaultProps = {
  rowSelection: {},
  showPagination: false,
};

export default Grid;
