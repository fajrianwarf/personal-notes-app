import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth, useTheme, useTranslation } from '../utils/custom-hooks';
import { IoLanguage } from 'react-icons/io5';
import { MdLogout, MdNightlight } from 'react-icons/md';
import { CiLight } from 'react-icons/ci';
import { saveAccessTokenToStorage } from '../utils';

function Navigation() {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const { t, toggleLanguage } = useTranslation();
  const { isAuthenticated, logout, user } = useAuth();

  const handleLogout = () => {
    saveAccessTokenToStorage('');
    logout();
    navigate('login');
  };

  return (
    <header>
      <h1>
        <Link to='/'>{t('notesApp')}</Link>
      </h1>
      <nav className='navigation'>
        {isAuthenticated && (
          <ul>
            <li>
              <Link to='/archives'>{t('archived')}</Link>
            </li>
          </ul>
        )}
      </nav>
      <button className='toggle-locale' onClick={toggleLanguage}>
        <IoLanguage />
      </button>
      <button className='toggle-theme' onClick={toggleTheme}>
        {theme === 'light' ? <MdNightlight /> : <CiLight />}
      </button>
      {isAuthenticated && (
        <button className='button-logout' onClick={handleLogout}>
          <MdLogout /> {user.name}
        </button>
      )}
    </header>
  );
}

export default Navigation;
