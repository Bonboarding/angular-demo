import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useUser } from '../services/UserService';

const AuthGuard = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useUser();

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default AuthGuard;
