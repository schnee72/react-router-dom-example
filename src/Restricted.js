import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default (BaseComponent) =>  {
  class Restricted extends Component {
    componentWillMount() {
      this.authenticationCheck(this.props);
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.location !== this.props.location)
        this.authenticationCheck(nextProps);
    }

    authenticationCheck(props) {
      if (props.location.search !== '?authenticated')
        props.history.push('/');
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  }

  Restricted.propTypes = {
    location: PropTypes.object.isRequired
  };

  return Restricted;
};
