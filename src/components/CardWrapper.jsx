import React from 'react';
import PropTypes from 'prop-types';

class CardWrapper extends React.Component {
  render() {
    return <section className='notes-list'>{this.props.children}</section>;
  }
}

CardWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default CardWrapper;
