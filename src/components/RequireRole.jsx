import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function RequireRole({ role, children }) {
  const { user } = useAuth();
  if (!user) return <Navigate to="/" replace />;

  // O Administrador tem acesso global a tudo
  if (user.role === 'admin') return children;

  // Verifica se o role do usuário coincide com o requerido
  if (role && user.role !== role) return <Navigate to={`/${user.role}`} replace />;

  return children;
}
