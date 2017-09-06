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
    let route = '/home';
    if (this.state.name !== '' && this.state.password !== '')
      route += '?authenticated';
    this.props.history.push(route);
  };

  handleNameChange = (e) => this.setState({ name: e.target.value });

  handlePasswordChange = (e) => this.setState({ password: e.target.value });
<<<<<<< HEAD

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.handleSubmit();
    }
  };
=======
>>>>>>> acac99852c38ec9305cf8211303173f415e33f03

  render() {
    return (
      <div>
        <h1>Login</h1>
        <p>Name</p>
        <input onChange={this.handleNameChange} />
        <p>Password</p>
        <input
          type="password"
          onChange={this.handlePasswordChange}
          onKeyDown={this.handleKeyDown} />
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
