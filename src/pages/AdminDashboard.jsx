import React from 'react';
import Dashboard from '../components/Dashboard';

export default function AdminDashboard() {
  const stats = { pagos: 10, pendentes: 5, vencidos: 2 };
  return (
    <div>
      <h2>Dashboard Administrativo</h2>
      <Dashboard stats={stats} />
    </div>
  );
}
