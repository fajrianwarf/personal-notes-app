import React from 'react';
import PropTypes from 'prop-types';

function CardWrapper(props) {
  return <section className='notes-list'>{props.children}</section>;
}

CardWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default CardWrapper;
