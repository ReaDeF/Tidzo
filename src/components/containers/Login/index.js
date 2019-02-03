// #region dependencies
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
// #region service
import LoginService from '../../../services/security/login';
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

    this.state = {
      credentials: {
        user: '',
        password: '',
      },
    };
  }

  componentDidMount() {}

  handleSubmit = (e) => {
    e.preventDefault();
  }

  loggedIn = () => {
    const LoginServ = new LoginService();
    const {
      credentials: {
        user,
        password,
      },
    } = this.state;
    const {
      dispatch,
    } = this.props;

    const credentialToSend = {
      usuario: user,
      password,
    };

    dispatch(LoginServ.login(credentialToSend));
  }

  handleInputOnchange = (evt) => {
    const {
      target: {
        value,
        name,
      },
    } = evt;

    this.setState(prevState => ({
      credentials: {
        ...prevState.credentials,
        [name]: value,
      },
    }));
  }

  /**
   * @function
   * @name render
   * @memberof components/containers/Login
   * @description Render all components
   * @return {JSX} Components for App
   */
  render() {
    const {
      handleSubmit,
      handleInputOnchange,
      loggedIn,
    } = this;
    const {
      credentials: {
        user,
        password,
      },
    } = this.state;

    return (
      <Row className="tidzo-login">
        <Col span={24}>
          <Title text="¡Bienvenido!" />
        </Col>
        <Col span={24}>
          <Form
            className="tidzo-login__form"
            layout="vertical"
            onSubmit={handleSubmit}
          >
            <Form.Item label="CORREO ELECTRONICO">
              <Input
                name="user"
                prefix={<Icon type="user" />}
                placeholder="nombre@micorreo.com"
                onChange={handleInputOnchange}
                value={user}
              />
            </Form.Item>
            <Form.Item label="CONTRASEÑA" className="tidzo-login__last-input">
              <Input
                name="password"
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="8+ caracteres alfanuméricos"
                onChange={handleInputOnchange}
                value={password}
              />
            </Form.Item>
            <Form.Item className="tidzo-login__actions">
              <a href="##" className="tidzo-anchor">Olvidé mi contraseña</a>
              <a href="##" className="tidzo-anchor">Quiero obtener una cuenta</a>
            </Form.Item>
            <Form.Item>
              <Button
                className="tidzo-button-primary"
                onClick={loggedIn}
              >
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
  dispatch: PropTypes.func,
};

Login.defaultProps = {
  dispatch: '',
};

export default withRouter(connect(mapStateToProps)(Login));
