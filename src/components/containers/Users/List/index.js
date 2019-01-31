// #region dependencies
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// #endregion
// #region components
import Toolbar from '../../../presentational/Toolbar';
import Grid from '../../../presentational/Grid';
// #endregion
// #region constant
// #endregion

/**
 * @file components/containers/UsersList/index.js
 * @class components/containers/UsersList
 * @extends React.Component
 * @classdesc This is the main UsersList component. Were all the views and controls are loaded.
 * This include the navigation layout and the route config
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @example
 * <UsersList />
 */
class UsersList extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {}

  /**
   * @function
   * @name render
   * @memberof components/containers/App
   * @description Render all components
   * @return {JSX} Components for App
   */
  render() {
    const columns = [
      {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.id - b.id,
      },
      {
        title: 'Nombres',
        dataIndex: 'name',
        key: 'name',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.name - b.name,
      },
      {
        title: 'Apellidos',
        dataIndex: 'lastName',
        key: 'lastName',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.lastName - b.lastName,
      },
      {
        title: 'Cargos',
        dataIndex: 'rol',
        key: 'rol',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.rol - b.rol,
      },
      {
        title: 'Punto de Venta',
        dataIndex: 'salesPoint',
        key: 'salesPoint',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.salesPoint - b.salesPoint,
      },
      {
        title: 'Estado',
        dataIndex: 'state',
        key: 'state',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.state - b.state,
      },
      {
        title: 'Fecha de Ingreso',
        dataIndex: 'dateIn',
        key: 'dateIn',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.dateIn - b.dateIn,
      },
      {
        title: 'Fecha de Retiro',
        dataIndex: 'dateOut',
        key: 'dateOut',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.dateOut - b.dateOut,
      },
    ];

    const dataSource = [
      {
        key: '1',
        id: '123456',
        name: 'Carlos',
        lastName: 'Lenon',
        rol: 'React Leader',
        salesPoint: 'Nicaragua',
        state: 'Activo',
        dateIn: '31 Ene. 2019',
        dateOut: '31 Ene. 2019',
      },
      {
        key: '2',
        id: '123456',
        name: 'Carlos',
        lastName: 'Lenon',
        rol: 'React Leader',
        salesPoint: 'Nicaragua',
        state: 'Activo',
        dateIn: '31 Ene. 2019',
        dateOut: '31 Ene. 2019',
      },
      {
        key: '3',
        id: '123456',
        name: 'Carlos',
        lastName: 'Lenon',
        rol: 'React Leader',
        salesPoint: 'Nicaragua',
        state: 'Activo',
        dateIn: '31 Ene. 2019',
        dateOut: '31 Ene. 2019',
      },
      {
        key: '4',
        id: '123456',
        name: 'Carlos',
        lastName: 'Lenon',
        rol: 'React Leader',
        salesPoint: 'Nicaragua',
        state: 'Activo',
        dateIn: '31 Ene. 2019',
        dateOut: '31 Ene. 2019',
      },
      {
        key: '5',
        id: '123456',
        name: 'Carlos',
        lastName: 'Lenon',
        rol: 'React Leader',
        salesPoint: 'Nicaragua',
        state: 'Activo',
        dateIn: '31 Ene. 2019',
        dateOut: '31 Ene. 2019',
      },
      {
        key: '6',
        id: '123456',
        name: 'Carlos',
        lastName: 'Lenon',
        rol: 'React Leader',
        salesPoint: 'Nicaragua',
        state: 'Activo',
        dateIn: '31 Ene. 2019',
        dateOut: '31 Ene. 2019',
      },
    ];

    // const pagination = {
    //   hideOnSinglePage: true,
    // };

    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };
    return (
      <>
        <Toolbar />
        <Grid
          columns={columns}
          data={dataSource}
          rowSelection={rowSelection}
        />
      </>
    );
  }
}

/**
 * @function
 * @name mapStateToProps
 * @memberof components/containers/Users
 * @description Set props to state
 * @param {Object} state    - list of state
 * @return {Object} state from store
 */
const mapStateToProps = () => ({});

UsersList.propTypes = {
  // dispatch: PropTypes.func,
};

UsersList.defaultProps = {
  // dispatch: '',
};

export default withRouter(connect(mapStateToProps)(UsersList));
