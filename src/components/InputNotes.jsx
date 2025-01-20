import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ActionButton from './ActionButton';
import { useInput, useTranslation } from '../utils/custom-hooks';

function InputNotes(props) {
  const { handleSave } = props;
  const { t } = useTranslation();
  const [title, onTitleChange] = useInput('');
  const [body, setBody] = useState('');

  const handleChangeBody = (e) => {
    setBody(e.target.innerHTML);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave({ title, body });
  };

  return (
    <div className='add-new-page__input'>
      <input
        className='add-new-page__input__title'
        placeholder={t('secretNote')}
        type='text'
        onChange={onTitleChange}
        value={title}
      />
      <div
        className='add-new-page__input__body'
        contentEditable
        data-placeholder={t('actuallyIam')}
        onInput={handleChangeBody}
      />
      <div className='add-new-page__action'>
        <ActionButton type='save' onClick={handleSubmit} />
      </div>
    </div>
  );
}

InputNotes.propTypes = {
  handleSave: PropTypes.func.isRequired,
};

export default InputNotes;
