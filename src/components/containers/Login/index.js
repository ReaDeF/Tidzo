// #region dependencies
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// #endregion
// #region antd
import {
  Row,
  Col,
  Form,
  Icon,
  Input,
  Button,
} from 'antd';
// #endregion
// #region components
import Title from '../../presentational/Title';
// #endregion
// #region constant
// #endregion

/**
 * @file components/containers/Login/index.js
 * @class components/containers/Login
 * @extends React.Component
 * @classdesc This is the main Login component. Were all the views and controls are loaded.
 * This include the navigation layout and the route config
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @example
 * <Login />
 */
class Login extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  componentDidMount() {}

  handleSubmit = (e) => {
    e.preventDefault();
  }

  /**
   * @function
   * @name render
   * @memberof components/containers/Login
   * @description Render all components
   * @return {JSX} Components for App
   */
  render() {
    const { handleSubmit } = this;

    return (
      <Row>
        <Col span={24}>
          <Title text="¡Bienvenido!" />
        </Col>
        <Col span={24}>
          <Form
            layout="vertical"
            onSubmit={handleSubmit}
          >
            <Form.Item label="CORREO ELECTRONICO">
              <Input prefix={<Icon type="user" />} placeholder="nombre@micorreo.com" />
            </Form.Item>
            <Form.Item label="CONTRASEÑA">
              <Input prefix={<Icon type="lock" />} type="password" placeholder="8+ caracteres alfanuméricos" />
            </Form.Item>
            <Form.Item>
              <a href="##">Olvidé mi contraseña</a>
              <a href="##">Quiero obtener una cuenta</a>
            </Form.Item>
            <Form.Item>
              <Button type="primary">
                {'Log in'}
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    );
  }
}

/**
 * @function
 * @name mapStateToProps
 * @memberof components/containers/Login
 * @description Set props to state
 * @param {Object} state    - list of state
 * @return {Object} state from store
 */
const mapStateToProps = () => ({});

Login.propTypes = {
  // dispatch: PropTypes.func,
};

Login.defaultProps = {
  // dispatch: '',
};

export default withRouter(connect(mapStateToProps)(Login));
