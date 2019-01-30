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
// #region service
// #endregion

/**
 * @file components/containers/RecoverPassword/index.js
 * @class components/containers/RecoverPassword
 * @extends React.Component
 * @classdesc This is the main RecoverPassword component.
 * Were all the views and controls are loaded.
 * This include the navigation layout and the route config
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @example
 * <RecoverPassword />
 */
class RecoverPassword extends React.Component {
  constructor() {
    super();

    this.state = {
      passwordNew: '',
      passwordRepeat: '',
    };
  }

  componentDidMount() {}

  handleSubmit = (e) => {
    e.preventDefault();
  }

  handleInputOnchange = (evt) => {
    const {
      target: {
        value,
        name,
      },
    } = evt;

    this.setState({
      [name]: value,
    });
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
      passwordNew,
      passwordRepeat,
    } = this.state;

    return (
      <Row>
        <Col span={24}>
          <Title text="Recuperación de Contraseña" />
        </Col>
        <Col span={24}>
          <Form
            layout="vertical"
            onSubmit={handleSubmit}
          >
            <Form.Item label="NUEVA CONTRASEÑA">
              <Input
                name="passwordNew"
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="8+ caracteres alfanuméricos"
                onChange={handleInputOnchange}
                value={passwordNew}
              />
            </Form.Item>
            <Form.Item label="CONFIRMA NUEVA CONTRASEÑA">
              <Input
                name="passwordRepeat"
                prefix={<Icon type="lock" />}
                type="password"
                placeholder="8+ caracteres alfanuméricos"
                onChange={handleInputOnchange}
                value={passwordRepeat}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                onClick={loggedIn}
              >
                {'CONTINUAR'}
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

RecoverPassword.propTypes = {
  // dispatch: PropTypes.func,
};

RecoverPassword.defaultProps = {
  // dispatch: '',
};

export default withRouter(connect(mapStateToProps)(RecoverPassword));
