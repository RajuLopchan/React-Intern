import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, role }) => {
  const auth = JSON.parse(localStorage.getItem('auth')) || { isLoggedIn: false, role: null };

  if (!auth.isLoggedIn) return <Navigate to="/login"/>;
  if (role && auth.role !== role) return <Navigate to="/" />;

  return children;
};

export default PrivateRoute;
