import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from '../utils/custom-hooks';

function SearchNotes(props) {
  const { value, onChangeInput } = props;
  const { t } = useTranslation();

  return (
    <section className='search-bar'>
      <input
        type='text'
        placeholder={t('findByTitle')}
        onChange={(event) => onChangeInput(event)}
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
