import React from 'react';
import PropTypes from 'prop-types';

function Title(props) {
  return <h2 className='glossy-text'>{props.text}</h2>;
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
