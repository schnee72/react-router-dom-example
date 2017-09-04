import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: ''
    };
  }

  handleSubmit = () => {
    let route = '/compose';
    if (this.state.name === '' || this.state.password === '')
      route += '?false';
    this.props.history.push(route);
  };

  handleNameChange = (e) => this.setState({name: e.target.value});

  handlePasswordChange = (e) => this.setState({password: e.target.value});

  render() {
    return (
      <div>
        <h1>Login</h1>
        <p>Name</p>
        <input onChange={this.handleNameChange} />
        <p>Password</p>
        <input type="password" onChange={this.handlePasswordChange} />
        <p>
          <button onClick={this.handleSubmit}>Submit</button>
        </p>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.object.isRequired
};

export default Login;
