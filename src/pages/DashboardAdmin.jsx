import React, { useMemo } from 'react';
import { generateMockData, stats as mockStats, messages } from '../services/dataService';
import { exportToPDF } from '../services/pdfService';
import Dashboard from '../components/Dashboard';
import './Dashboard.css';

export default function DashboardAdmin() {
  const { users } = useMemo(() => generateMockData(), []);

  const handleExportPDF = () => {
    const columns = ['Nome', 'Email', 'Tipo', 'Status'];
    const data = users.slice(0, 20).map(u => ({
      nome: u.nome,
      email: u.email,
      tipo: u.tipo,
      status: 'Ativo'
    }));
    exportToPDF('Gestão de Usuários', columns, data, 'usuarios_condohub.pdf');
  };

  return (
    <div className="dashboard-page animate-in">
      <header className="page-header sticky-header">
        <div className="header-content">
          <h1>Administrativo</h1>
          <p>Visão global do sistema.</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary hide-mobile" onClick={handleExportPDF}>Exportar PDF</button>
          <button className="btn btn-primary">+ Novo</button>
        </div>
      </header>

      {/* Floating Action Button for Mobile */}
      <button className="fab-mobile" onClick={handleExportPDF}>PDF</button>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-info">
            <span className="stat-label">Total Pagos</span>
            <span className="stat-value">{mockStats.pagos}</span>
          </div>
          <div className="stat-icon pagos">P</div>
        </div>
        {/* ... existing stats ... */}
        <div className="stat-card">
          <div className="stat-info">
            <span className="stat-label">Pendentes</span>
            <span className="stat-value">{mockStats.pendentes}</span>
          </div>
          <div className="stat-icon pendentes">W</div>
        </div>
        <div className="stat-card">
          <div className="stat-info">
            <span className="stat-label">Vencidos</span>
            <span className="stat-value">{mockStats.vencidos}</span>
          </div>
          <div className="stat-icon vencidos">D</div>
        </div>
        <div className="stat-card">
          <div className="stat-info">
            <span className="stat-label">Total Boletos</span>
            <span className="stat-value">{mockStats.total}</span>
          </div>
          <div className="stat-icon total">T</div>
        </div>
      </div>

      <div className="dashboard-content-grid">
        <section className="main-section">
          <div className="card chart-card">
            <div className="section-header">
              <h2>Visão Geral de Cobranças</h2>
            </div>
            <Dashboard stats={mockStats} />
          </div>

          <div className="section-header" style={{ marginTop: '2rem' }}>
            <h2>Gestão de Usuários Recentemente Ativos</h2>
            <button className="btn-text">Ver todos</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>E-mail</th>
                  <th>Tipo</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {users.slice(0, 8).map(user => (
                  <tr key={user.id}>
                    <td><b>{user.nome}</b></td>
                    <td>{user.email}</td>
                    <td><span className={`badge ${user.tipo.toLowerCase()}`}>{user.tipo}</span></td>
                    <td><span className="dot active"></span> Ativo</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <aside className="sidebar-section">
          <div className="card">
            <h3>Últimos Avisos</h3>
            <div className="message-list">
              {messages.map(msg => (
                <div key={msg.id} className="message-item">
                  <div className="message-header">
                    <span className="message-sender">{msg.remetente}</span>
                    <span className="message-date">{msg.data}</span>
                  </div>
                  <p className="message-subject">{msg.assunto}</p>
                </div>
              ))}
            </div>
            <button className="btn btn-outline full-width">Ver Todas Mensagens</button>
          </div>

          <div className="card next-events">
            <h3>Próximos Eventos</h3>
            <ul>
              <li>
                <span className="event-date">12/06</span>
                <span className="event-name">Manutenção da Piscina</span>
              </li>
              <li>
                <span className="event-date">15/06</span>
                <span className="event-name">Reunião Extraordinária</span>
              </li>
              <li>
                <span className="event-date">20/06</span>
                <span className="event-name">Leitura de Água</span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
