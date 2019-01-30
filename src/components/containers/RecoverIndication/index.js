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
 * @file components/containers/RecoverIndication/index.js
 * @class components/containers/RecoverIndication
 * @extends React.Component
 * @classdesc This is the main RecoverIndication component.
 * Were all the views and controls are loaded.
 * This include the navigation layout and the route config
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 * @example
 * <RecoverIndication />
 */
class RecoverIndication extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
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
      },
    } = evt;

    this.setState({
      email: value,
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
      email,
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
            <Form.Item label="CORREO ELECTRONICO">
              <Input
                name="email"
                prefix={<Icon type="user" />}
                placeholder="nombre@micorreo.com"
                onChange={handleInputOnchange}
                value={email}
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                onClick={loggedIn}
              >
                {'ENVIAR'}
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

RecoverIndication.propTypes = {
  // dispatch: PropTypes.func,
};

RecoverIndication.defaultProps = {
  // dispatch: '',
};

export default withRouter(connect(mapStateToProps)(RecoverIndication));
