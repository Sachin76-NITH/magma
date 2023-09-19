// ProtectedRoute.js (Custom component to protect routes)
import React from 'react';
import { Navigate } from 'react-router-dom';
import { UseAuth } from './UseAuth';

function ProtectedRoute({ children }) {
  const { isAuthenticated } = UseAuth();

  if (!isAuthenticated) {
    return <Navigate to="/Login"/>;
  }

  return children;
}

export default ProtectedRoute;
