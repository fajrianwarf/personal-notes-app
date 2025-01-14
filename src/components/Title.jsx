import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    return <h2 className='glossy-text'>{this.props.text}</h2>;
  }
} 

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
