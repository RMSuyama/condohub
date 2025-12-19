import React, { useMemo } from 'react';
import { generateMockData, stats, messages } from '../services/dataService';
import { exportToPDF } from '../services/pdfService';
import './Dashboard.css';

export default function DashboardSindico() {
  const { boletos } = useMemo(() => generateMockData(), []);

  const handleExportCash = () => {
    const columns = ['Morador', 'Serviço', 'Mês', 'Valor', 'Status'];
    const data = boletos.filter(b => b.status === 'Pago').map(b => ({
      morador: b.usuario,
      servico: b.servico,
      mes: b.mes,
      valor: b.valor,
      status: b.status
    }));
    exportToPDF('Fluxo de Caixa - Recebimentos', columns, data, 'caixa_condominio.pdf');
  };

  return (
    <div className="dashboard-page animate-in">
      <header className="page-header sticky-header">
        <div className="header-content">
          <h1>Sindicato</h1>
          <p>Gestão do Residencial.</p>
        </div>
        <div className="header-actions">
          <button className="btn btn-secondary hide-mobile" onClick={handleExportCash}>Exportar CAIXA</button>
          <button className="btn btn-primary">+ Aviso</button>
        </div>
      </header>

      <button className="fab-mobile" onClick={handleExportCash}>PDF</button>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-info">
            <span className="stat-label">Arrecadação Mês</span>
            <span className="stat-value">R$ 42.500</span>
          </div>
          <div className="stat-icon pagos">$</div>
        </div>
        <div className="stat-card">
          <div className="stat-info">
            <span className="stat-label">Inadimplência</span>
            <span className="stat-value">8.2%</span>
          </div>
          <div className="stat-icon vencidos">%</div>
        </div>
        <div className="stat-card">
          <div className="stat-info">
            <span className="stat-label">Reservas Hoje</span>
            <span className="stat-value">{stats.reservasAtivas}</span>
          </div>
          <div className="stat-icon total">R</div>
        </div>
      </div>

      <div className="dashboard-content-grid">
        <section className="main-section">
          <div className="section-header">
            <h2>Últimos Pagamentos Identificados</h2>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Morador</th>
                  <th>Serviço</th>
                  <th>Mês</th>
                  <th>Valor</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {boletos.filter(b => b.status === 'Pago').slice(0, 6).map(boleto => (
                  <tr key={boleto.id}>
                    <td><b>{boleto.usuario}</b></td>
                    <td>{boleto.servico}</td>
                    <td>{boleto.mes}</td>
                    <td>{boleto.valor}</td>
                    <td><span className="badge pago">Confirmado</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <aside className="sidebar-section">
          <div className="card">
            <h3>Ações do Síndico</h3>
            <div className="action-buttons-list">
              <button className="btn btn-outline full-width">Aprovar Reservas</button>
              <button className="btn btn-outline full-width" style={{ marginTop: '0.75rem' }}>Gerenciar Ocorrências</button>
              <button className="btn btn-outline full-width" style={{ marginTop: '0.75rem' }}>Biblioteca de Atas</button>
            </div>
          </div>

          <div className="card">
            <h3>Próxima Assembleia</h3>
            <div className="assembly-card">
              <div className="event-date big">{stats.proximaReuniao}</div>
              <p><b>Pauta:</b> Pintura da fachada e modernização dos elevadores.</p>
              <button className="btn btn-primary full-width" style={{ marginTop: '1rem' }}>Gerar Edital</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
