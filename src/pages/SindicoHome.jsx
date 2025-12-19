import React from 'react';

export default function SindicoHome() {
  return (
    <div style={{ background: '#fff', borderRadius: 12, padding: '2rem', boxShadow: '0 2px 12px #0a234210', maxWidth: 700, margin: '0 auto' }}>
      <h2 style={{ color: '#155fa0', fontWeight: 700, fontSize: 28, marginBottom: 16 }}>Painel do Síndico</h2>
      <div style={{ color: '#0a2342', fontSize: 17, marginBottom: 24 }}>
        Bem-vindo! Aqui você pode gerenciar o seu condomínio: ver boletos, aprovar solicitações, publicar avisos e acompanhar reuniões.
      </div>
      {/* Adicione aqui cards e menus específicos do síndico */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ background: '#f8fafc', borderRadius: 8, padding: 18, boxShadow: '0 1px 4px #155fa020' }}>
          <b>Boletos do Condomínio</b>
          <div style={{ color: '#155fa0', fontSize: 15 }}>Visualize e aprove boletos dos moradores.</div>
        </div>
        <div style={{ background: '#f8fafc', borderRadius: 8, padding: 18, boxShadow: '0 1px 4px #155fa020' }}>
          <b>Solicitações de Retificação</b>
          <div style={{ color: '#155fa0', fontSize: 15 }}>Acompanhe e aprove solicitações de retificação de boletos.</div>
        </div>
        <div style={{ background: '#f8fafc', borderRadius: 8, padding: 18, boxShadow: '0 1px 4px #155fa020' }}>
          <b>Publicar Avisos</b>
          <div style={{ color: '#155fa0', fontSize: 15 }}>Envie comunicados para todos os moradores.</div>
        </div>
        <div style={{ background: '#f8fafc', borderRadius: 8, padding: 18, boxShadow: '0 1px 4px #155fa020' }}>
          <b>Reuniões</b>
          <div style={{ color: '#155fa0', fontSize: 15 }}>Agende e acompanhe reuniões do condomínio.</div>
        </div>
      </div>
    </div>
  );
}
