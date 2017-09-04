import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default (BaseComponent) =>  {
  class Protected extends Component {
    componentWillMount() {
      this.authenticationCheck(this.props);
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location)
        this.authenticationCheck(nextProps);
    }

    authenticationCheck(props) {
      if (props.location.search !== '')
        props.history.push('/');
    }

    render() {
      return <BaseComponent {...this.props}/>;
    }
  }

  Protected.propTypes = {
    location: PropTypes.object.isRequired
  };

  return Protected;
};
