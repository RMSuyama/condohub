
import React, { useEffect, useState } from 'react';
import Table from '../components/Table';

// Importar a mesma geração de boletos do AdminHome
import { boletos as allBoletos } from './AdminHome';

export default function Tickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Simula pegar o email do usuário logado (em app real, viria do contexto de auth)
    const email = localStorage.getItem('user_email') || 'morador@cond.com';
    // Filtra boletos do usuário logado
    const meusBoletos = allBoletos.filter(b => b.email === email);
    setTickets(meusBoletos);
  }, []);

  return (
    <div>
      <h2>Meus Boletos</h2>
      <Table data={tickets.map(b => ({
        'Mês': b.mes,
        'Valor': b.valor,
        'Status': b.status,
        'Serviço': b.servico
      }))} columns={['Serviço', 'Mês', 'Valor', 'Status']} />
      {tickets.length === 0 && <div style={{ color: '#b3b3b3', marginTop: 16 }}>Nenhum boleto encontrado para seu usuário.</div>}
    </div>
  );
}
