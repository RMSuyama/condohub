import React from 'react';
import { Link } from 'react-router-dom';
const linkStyle = {
  color: '#fff',
  background: 'linear-gradient(90deg, #155fa0 0%, #38bdf8 100%)',
  padding: '0.8rem 1.5rem',
  borderRadius: 8,
  fontWeight: 600,
  fontSize: 17,
  textDecoration: 'none',
  textAlign: 'center',
  boxShadow: '0 2px 8px #155fa080',
  transition: 'background 0.2s',
};

const reunioes = [
  { data: '20/12/2025', assunto: 'Assembleia Ordinária', descricao: 'Discussão sobre orçamento 2026 e eleição de síndico.' },
  { data: '10/01/2026', assunto: 'Reunião Extra', descricao: 'Planejamento de obras na garagem.' },
];
const avisos = [
  { data: '18/12/2025', titulo: 'Manutenção da piscina', texto: 'Piscina interditada para manutenção até 22/12.' },
  { data: '15/12/2025', titulo: 'Novo sistema de portaria', texto: 'Acesso por QR Code já disponível.' },
];


export default function ResidentHome() {
  return (
    <div style={{ background: 'linear-gradient(120deg, #38bdf8 0%, #155fa0 100%)', borderRadius: 16, padding: '2.5rem 1.5rem', maxWidth: 350, margin: '40px auto', boxShadow: '0 4px 24px #155fa080', display: 'flex', flexDirection: 'column', gap: 28 }}>
      <Link to="/tickets" style={{
        color: '#fff',
        background: 'none',
        padding: '1.2rem 0',
        borderRadius: 8,
        fontWeight: 700,
        fontSize: 20,
        textDecoration: 'none',
        textAlign: 'center',
        boxShadow: '0 2px 8px #155fa040',
        letterSpacing: 1,
        border: 'none',
        transition: 'background 0.2s, transform 0.15s',
        outline: 'none',
        margin: 0,
        display: 'block',
        cursor: 'pointer',
      }}
        onMouseOver={e => { e.currentTarget.style.background = '#1e90e0'; e.currentTarget.style.transform = 'scale(1.03)'; }}
        onMouseOut={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.transform = 'scale(1)'; }}
      >Meus Boletos</Link>
      <Link to="/retification" style={{
        color: '#fff',
        background: 'none',
        padding: '1.2rem 0',
        borderRadius: 8,
        fontWeight: 700,
        fontSize: 20,
        textDecoration: 'none',
        textAlign: 'center',
        boxShadow: '0 2px 8px #155fa040',
        letterSpacing: 1,
        border: 'none',
        transition: 'background 0.2s, transform 0.15s',
        outline: 'none',
        margin: 0,
        display: 'block',
        cursor: 'pointer',
      }}
        onMouseOver={e => { e.currentTarget.style.background = '#1e90e0'; e.currentTarget.style.transform = 'scale(1.03)'; }}
        onMouseOut={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.transform = 'scale(1)'; }}
      >Solicitar Retificação</Link>
      <Link to="/messages" style={{
        color: '#fff',
        background: 'none',
        padding: '1.2rem 0',
        borderRadius: 8,
        fontWeight: 700,
        fontSize: 20,
        textDecoration: 'none',
        textAlign: 'center',
        boxShadow: '0 2px 8px #155fa040',
        letterSpacing: 1,
        border: 'none',
        transition: 'background 0.2s, transform 0.15s',
        outline: 'none',
        margin: 0,
        display: 'block',
        cursor: 'pointer',
      }}
        onMouseOver={e => { e.currentTarget.style.background = '#1e90e0'; e.currentTarget.style.transform = 'scale(1.03)'; }}
        onMouseOut={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.transform = 'scale(1)'; }}
      >Mensagens</Link>
    </div>
  );
}
