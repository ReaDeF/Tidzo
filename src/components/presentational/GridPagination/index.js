// #region load dependencies
import React from 'react';
import PropTypes from 'prop-types';
// #endregion
// #region atnd
import {
  Row,
  Col,
  Pagination,
  Select,
} from 'antd';
// #endregion
// #region components
// #endregion

const { Option } = Select;

/**
 * @file components/presentational/GridPagination/index.js
 * @module components/presentational/GridPagination
 * @desc This is the stateless functional component for GridPagination.
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @return {JSX} GridPagination component
 * @example
 * <GridPagination />
 */
const GridPagination = ({
  totalRow,
  moduleName,
  defaultCurrentPage,
  defaultPageSize,
  pageSize,
  pageSizeOptions,
  showSizeChanger,
  handleOnChange,
  handleOnSizeChange,
  handlePageSizeChange,
}) => (
  <Row className="tidzo-footer-pagination">
    <Col span={14}>
      <h1>
        <span>TOTAL LISTADO:</span>
        <span>{totalRow}</span>
        <span>{moduleName}</span>
      </h1>
      <p>
        <a href="##">{`Ver ${moduleName} en papelera`}</a>
      </p>
    </Col>
    <Col span={2}>
      <span>Página</span>
      <Select
        defaultValue="1"
        onChange={handlePageSizeChange}
      >
        <Option value="1">1</Option>
        <Option value="2">2</Option>
        <Option value="3">3</Option>
      </Select>
      <span>de</span>
      <span>{totalRow}</span>
    </Col>
    <Col span={8}>
      <Pagination
        total={totalRow}
        defaultCurrent={defaultCurrentPage}
        defaultPageSize={defaultPageSize}
        pageSize={pageSize}
        pageSizeOptions={pageSizeOptions}
        showSizeChanger={showSizeChanger}
        onChange={handleOnChange}
        onShowSizeChange={handleOnSizeChange}
      />
    </Col>
  </Row>
);

/**
 * @name GridPagination PropTypes
 * @memberof components/presentational/GridPagination
 * @type {propTypes}
 * @param {Object} props        - React PropTypes
 * @return {Array} React PropTypes
 */
GridPagination.propTypes = {
  totalRow: PropTypes.number.isRequired,
  moduleName: PropTypes.string.isRequired,
  defaultCurrentPage: PropTypes.number,
  defaultPageSize: PropTypes.number,
  pageSize: PropTypes.number,
  pageSizeOptions: PropTypes.array,
  showSizeChanger: PropTypes.bool,
  handleOnChange: PropTypes.func.isRequired,
  handleOnSizeChange: PropTypes.func.isRequired,
  handlePageSizeChange: PropTypes.func.isRequired,
};

GridPagination.defaultProps = {
  defaultCurrentPage: 1,
  defaultPageSize: 10,
  pageSize: 10,
  pageSizeOptions: ['10', '20', '30', '40'],
  showSizeChanger: false,
};

export default GridPagination;
