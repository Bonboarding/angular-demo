import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');

  useEffect(() => {
    localStorage.setItem('username', username);
  }, [username]);

  const login = (username) => {
    setUsername(username);
  };

  const logout = () => {
    setUsername('');
    localStorage.removeItem('username');
  };

  const isLoggedIn = () => {
    return !!username;
  };

  return (
    <UserContext.Provider value={{ username, login, logout, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
