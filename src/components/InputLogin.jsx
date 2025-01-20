import React from 'react';
import PropTypes from 'prop-types';
import { useInput, useTranslation } from '../utils/custom-hooks';

function InputLogin(props) {
  const { onSubmitLogin } = props;
  const { t } = useTranslation();
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const handleSubmit = () => {
    onSubmitLogin({ email, password });
  };

  return (
    <div className='input-login'>
      <label htmlFor='email'>{t('email')}</label>
      <input type='email' id='email' value={email} onChange={onEmailChange} />
      <label htmlFor='password'>{t('password')}</label>
      <input
        type='password'
        id='password'
        value={password}
        onChange={onPasswordChange}
      />
      <button type='button' onClick={handleSubmit}>
        {t('login')}
      </button>
    </div>
  );
}

InputLogin.propTypes = {
  onSubmitLogin: PropTypes.func.isRequired,
};

export default InputLogin;
