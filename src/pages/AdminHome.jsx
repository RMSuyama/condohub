
import React from 'react';
import Dashboard from '../components/Dashboard';
import Table from '../components/Table';
import MessagePanel from '../components/MessagePanel';


// Geração de 200 usuários fictícios
const tipos = ['Morador', 'Moradora', 'Síndico', 'Síndica'];
const nomesBase = ['Ana', 'Carlos', 'Beatriz', 'Roberto', 'Lucas', 'Mariana', 'Paulo', 'Fernanda', 'João', 'Patrícia', 'Rafael', 'Juliana', 'Eduardo', 'Camila', 'Bruno', 'Larissa', 'Gustavo', 'Aline', 'Felipe', 'Renata'];
const sobrenomes = ['Souza', 'Lima', 'Silva', 'Dias', 'Oliveira', 'Costa', 'Martins', 'Almeida', 'Ferreira', 'Gomes'];

function randomItem(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

const users = Array.from({ length: 200 }, (_, i) => {
  const nome = `${randomItem(nomesBase)} ${randomItem(sobrenomes)}`;
  const email = `${nome.toLowerCase().replace(/ /g, '.')}${i}@cond.com`;
  const tipo = i === 0 ? 'Síndica' : randomItem(tipos);
  return { nome, email, tipo };
});

// Geração de boletos para cada usuário
const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
const servicos = ['Água', 'Luz', 'IPTU', 'Condomínio'];
const statusBoleto = ['Pago', 'Pendente', 'Vencido'];

function gerarValor(servico) {
  switch (servico) {
    case 'Água': return `R$ ${(80 + Math.random() * 40).toFixed(2)}`;
    case 'Luz': return `R$ ${(100 + Math.random() * 60).toFixed(2)}`;
    case 'IPTU': return `R$ ${(300 + Math.random() * 100).toFixed(2)}`;
    case 'Condomínio': return `R$ ${(400 + Math.random() * 100).toFixed(2)}`;
    default: return 'R$ 0,00';
  }
}

export const boletos = users.flatMap((user, idx) =>
  servicos.map(servico => ({
    usuario: user.nome,
    email: user.email,
    tipo: user.tipo,
    servico,
    mes: randomItem(meses),
    valor: gerarValor(servico),
    status: randomItem(statusBoleto),
  }))
);

const messages = [
  { remetente: 'Síndica', assunto: 'Reunião Extraordinária', data: '10/06', conteudo: 'Convocação para reunião sobre obras.' },
  { remetente: 'Morador', assunto: 'Barulho', data: '09/06', conteudo: 'Solicito providências sobre barulho noturno.' },
  { remetente: 'Admin', assunto: 'Aviso', data: '08/06', conteudo: 'Manutenção da piscina dia 12/06.' },
];

const stats = { pagos: 24, pendentes: 7, vencidos: 2 };

function CalendarCard() {
  return (
    <div style={{ background: '#181c24', borderRadius: 12, padding: '1.5rem', color: '#fff', minWidth: 260, boxShadow: '0 2px 12px #0a234210', marginBottom: 24 }}>
      <h3 style={{ color: '#38bdf8', marginBottom: 10 }}>Calendário</h3>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: 15 }}>
        <li><b>12/06</b> - Manutenção da piscina</li>
        <li><b>15/06</b> - Reunião de condomínio</li>
        <li><b>20/06</b> - Limpeza da caixa d'água</li>
      </ul>
    </div>
  );
}

function QuickActions() {
  return (
    <div style={{ background: '#181c24', borderRadius: 12, padding: '1.5rem', color: '#fff', minWidth: 260, boxShadow: '0 2px 12px #0a234210', marginBottom: 24 }}>
      <h3 style={{ color: '#38bdf8', marginBottom: 10 }}>Ações Rápidas</h3>
      <button
        style={{
          background: 'linear-gradient(100deg, #38bdf8 0%, #155fa0 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: 12,
          padding: '1rem 1.5rem',
          fontWeight: 800,
          fontSize: 17,
          marginBottom: 14,
          width: '100%',
          cursor: 'pointer',
          boxShadow: '0 4px 16px #38bdf850',
          transition: 'transform 0.15s, box-shadow 0.15s, background 0.2s',
          outline: 'none',
        }}
        onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 6px 24px #38bdf880'; }}
        onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px #38bdf850'; }}
      >Novo Aviso</button>
      <button
        style={{
          background: 'linear-gradient(100deg, #155fa0 0%, #38bdf8 100%)',
          color: '#fff',
          border: 'none',
          borderRadius: 12,
          padding: '1rem 1.5rem',
          fontWeight: 800,
          fontSize: 17,
          width: '100%',
          cursor: 'pointer',
          boxShadow: '0 4px 16px #155fa050',
          transition: 'transform 0.15s, box-shadow 0.15s, background 0.2s',
          outline: 'none',
        }}
        onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 6px 24px #155fa080'; }}
        onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px #155fa050'; }}
      >Adicionar Usuário</button>
    </div>
  );
}

function RecentMessages() {
  return (
    <div style={{ background: '#181c24', borderRadius: 12, padding: '1.5rem', color: '#fff', minWidth: 260, boxShadow: '0 2px 12px #0a234210', marginBottom: 24 }}>
      <h3 style={{ color: '#38bdf8', marginBottom: 10 }}>Mensagens Recentes</h3>
      <ul style={{ listStyle: 'none', padding: 0, fontSize: 15 }}>
        {messages.map((m, i) => (
          <li key={i} style={{ marginBottom: 10 }}>
            <b>{m.assunto}</b> <span style={{ color: '#38bdf8' }}>({m.data})</span><br />
            <span style={{ color: '#b3b3b3' }}>{m.remetente}:</span> {m.conteudo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AdminHome() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <h2 style={{ color: '#38bdf8', fontWeight: 800, fontSize: 32, marginBottom: 8 }}>Painel do Administrador</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32, alignItems: 'flex-start' }}>
        <div style={{ flex: 2, minWidth: 320 }}>
          <Dashboard stats={stats} />
          <div style={{ marginTop: 32 }}>
            <h3 style={{ color: '#38bdf8', marginBottom: 10 }}>Gestão de Boletos dos Usuários</h3>
            <Table columns={['Usuário', 'Email', 'Tipo', 'Serviço', 'Mês', 'Valor', 'Status']} data={boletos.slice(0, 100)} />
            <div style={{ color: '#b3b3b3', fontSize: 14, marginTop: 8 }}>
              Exibindo 100 de {boletos.length} boletos gerados para 200 usuários.
            </div>
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 260, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <CalendarCard />
          <QuickActions />
          <RecentMessages />
        </div>
      </div>
      <div style={{ marginTop: 32 }}>
        <h3 style={{ color: '#38bdf8', marginBottom: 10 }}>Enviar Mensagem para o Condomínio</h3>
        <MessagePanel />
      </div>
    </div>
  );
}
