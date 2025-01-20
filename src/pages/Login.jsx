import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import InputLogin from '../components/InputLogin';
import PageLoader from '../components/PageLoader';
import { getUserLogged, login, putAccessToken } from '../utils';
import { useAuth, useTranslation } from '../utils/custom-hooks';

function Login() {
  const { t } = useTranslation();
  const { login: setUser } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (user) => {
    setIsLoading(true);
    const { error, data: loginData } = await login(user);

    if (!error && loginData.accessToken) {
      putAccessToken(loginData.accessToken);
      const { data: userData } = await getUserLogged();
      setUser(userData);
      navigate('/');
    }
    setIsLoading(false);
  };

  return (
    <section className='login-page'>
      <h2>{t('letsLogin')}</h2>
      {isLoading && <PageLoader />}
      <InputLogin isLoading={isLoading} onSubmitLogin={handleLogin} />
      <p>
        {t('dontHaveAcc')}&nbsp;<Link to='/register'>{t('registerHere')}</Link>
      </p>
    </section>
  );
}

export default Login;
