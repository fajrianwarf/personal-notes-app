import React from 'react';
import PropTypes from 'prop-types';
import { useInput, useTranslation } from '../utils/custom-hooks';

function InputRegister(props) {
  const { onSubmitRegister } = props;
  const { t } = useTranslation();
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      alert(t('passwordNotSame'));
      return;
    }

    onSubmitRegister({ name, email, password });
  };

  return (
    <div className='input-login'>
      <label htmlFor='name'>{t('name')}</label>
      <input type='text' id='name' value={name} onChange={onNameChange} />
      <label htmlFor='email'>{t('email')}</label>
      <input type='email' id='email' value={email} onChange={onEmailChange} />
      <label htmlFor='password'>{t('password')}</label>
      <input
        type='password'
        id='password'
        value={password}
        onChange={onPasswordChange}
      />
      <label htmlFor='confirmPassword'>{t('confirmPassword')}</label>
      <input
        type='password'
        id='confirmPassword'
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
      />
      <button type='button' onClick={handleSubmit}>
        {t('register')}
      </button>
    </div>
  );
}

InputRegister.propTypes = {
  onSubmitRegister: PropTypes.func.isRequired,
};

export default InputRegister;
