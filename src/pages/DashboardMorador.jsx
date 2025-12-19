import React, { useMemo } from 'react';
import { generateMockData, messages } from '../services/dataService';
import './Dashboard.css';

export default function DashboardMorador() {
  const { boletos } = useMemo(() => generateMockData(), []);

  // Filter boletos for a "mock" current user
  const userBoletos = boletos.slice(0, 4);

  return (
    <div className="dashboard-page animate-in">
      <header className="page-header sticky-header">
        <div className="header-content">
          <h1>Olá, Rafael!</h1>
          <p>Condomínio em ordem.</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-primary">+ Reserva</button>
        </div>
      </header>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-info">
            <span className="stat-label">Cota Condominial</span>
            <span className="stat-value">R$ 450,00</span>
          </div>
          <div className="stat-icon total">H</div>
        </div>
        <div className="stat-card">
          <div className="stat-info">
            <span className="stat-label">Próximo Vencimento</span>
            <span className="stat-value">10/07</span>
          </div>
          <div className="stat-icon pendentes">D</div>
        </div>
        <div className="stat-card">
          <div className="stat-info">
            <span className="stat-label">Minhas Reservas</span>
            <span className="stat-value">2</span>
          </div>
          <div className="stat-icon pagos">S</div>
        </div>
      </div>

      <div className="dashboard-content-grid">
        <section className="main-section">
          <div className="section-header">
            <h2>Meus Boletos Recentes</h2>
            <button className="btn-text">Ver histórico completo</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Vencimento</th>
                  <th>Serviço</th>
                  <th>Valor</th>
                  <th>Status</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {boletos.slice(0, 5).map(boleto => (
                  <tr key={boleto.id}>
                    <td>10/{boleto.mes.slice(0, 3)}</td>
                    <td>{boleto.servico}</td>
                    <td><b>{boleto.valor}</b></td>
                    <td>
                      <span className={`badge ${boleto.status.toLowerCase()}`}>
                        {boleto.status}
                      </span>
                    </td>
                    <td>
                      <button className="btn-icon">DOC</button>
                      <button className="btn-icon" style={{ marginLeft: '0.5rem' }}>PF</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <aside className="sidebar-section">
          <div className="card">
            <h3>Mural de Avisos</h3>
            <div className="message-list">
              {messages.map(msg => (
                <div key={msg.id} className="message-item">
                  <div className="message-header">
                    <span className="message-sender">{msg.remetente}</span>
                    <span className="message-date">{msg.data}</span>
                  </div>
                  <p className="message-subject">{msg.assunto}</p>
                  <p className="message-excerpt" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    {msg.conteudo.slice(0, 40)}...
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h3>Atalhos Rápidos</h3>
            <div className="shortcuts-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              <button className="shortcut-btn">
                <span>NEW</span>
                <span>Ocorrência</span>
              </button>
              <button className="shortcut-btn">
                <span>VIST</span>
                <span>Visitante</span>
              </button>
              <button className="shortcut-btn">
                <span>PACK</span>
                <span>Encomendas</span>
              </button>
              <button className="shortcut-btn">
                <span>VOTE</span>
                <span>Enquetes</span>
              </button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
