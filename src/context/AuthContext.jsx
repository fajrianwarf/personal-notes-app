import React, { createContext, useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { getAccessToken, getUserLogged } from '../utils';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isFirstLoading, setIsFirstLoading] = useState(true);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data: storedUser } = await getUserLogged();
        if (storedUser) {
          setUser(storedUser);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setIsFirstLoading(false);
      }
    };

    const token = getAccessToken();
    if (token) {
      fetchUser();
    } else {
      setIsFirstLoading(false);
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      user,
      isFirstLoading,
      login,
      logout,
      isAuthenticated: !!user,
    }),
    [user, login, logout, isFirstLoading]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AuthContext;
