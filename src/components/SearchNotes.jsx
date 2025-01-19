import React from 'react';
import PropTypes from 'prop-types';

function SearchNotes(props) {
  const { value, onChangeInput } = props;
  return (
    <section className='search-bar'>
      <input
        type='text'
        placeholder='Cari berdasarkan judul...'
        onChange={(e) => onChangeInput(e.target.value)}
        value={value}
      />
    </section>
  );
}

SearchNotes.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default SearchNotes;
