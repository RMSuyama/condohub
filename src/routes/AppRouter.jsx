
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import DashboardMorador from '../pages/DashboardMorador';
import DashboardSindico from '../pages/DashboardSindico';
import DashboardAdmin from '../pages/DashboardAdmin';
import RequireRole from '../components/RequireRole';

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/morador" element={
        <RequireRole role="morador">
          <DashboardMorador />
        </RequireRole>
      } />
      <Route path="/sindico" element={
        <RequireRole role="sindico">
          <DashboardSindico />
        </RequireRole>
      } />
      <Route path="/admin" element={
        <RequireRole role="admin">
          <DashboardAdmin />
        </RequireRole>
      } />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default AppRouter;

// Esqueleto de rotas principais do CondoHub
// TODO: Adicionar lógica de autenticação e roles
