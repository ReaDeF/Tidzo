// #region load dependencies
import React from 'react';
// import PropTypes from 'prop-types';
// #endregion
// #region atnd
import {
  Row,
  Col,
  Button,
  Icon,
} from 'antd';
// #endregion
// #region components
import Title from '../Title';
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
const Toolbar = () => (
  <Row className="tidzo-toolbar">
    <Col span={12}>
      <Title text="Administración" heading={1} />
      <Title text="Usuarios" heading={2} />
    </Col>
    <Col className="tidzo-toolbar__actions" span={12}>
      <Button>
        <Icon type="filter" />
        <div>Filtros</div>
      </Button>
      <div className="tidzo-toolbar__divider" />
      <Button>
        <Icon type="user-add" />
        <div>Crear Usuario</div>
      </Button>
      <Button>
        <Icon
          type="export"
          rotate={180}
        />
        <div>Importar</div>
      </Button>
      <Button>
        <Icon type="export" />
        <div>Exportar</div>
      </Button>
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
Toolbar.propTypes = {
  // items: PropTypes.array.isRequired,
};

export default Toolbar;
