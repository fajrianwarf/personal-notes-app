import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import InputRegister from '../components/InputRegister';
import PageLoader from '../components/PageLoader';
import { useTranslation } from '../utils/custom-hooks';
import { register } from '../utils';

function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async (user) => {
    setIsLoading(true);
    const { error } = await register(user);

    if (!error) {
      navigate('/login');
    }
    setIsLoading(false);
  };

  return (
    <section className='register-page'>
      <h2>{t('fillRegisterForm')}</h2>
      {isLoading && <PageLoader />}
      <InputRegister onSubmitRegister={handleRegister} />
      <p>
        {t('alreadyHaveAcc')}&nbsp;<Link to='/login'>{t('loginHere')}</Link>
      </p>
    </section>
  );
}

export default Register;
