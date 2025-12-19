import React, { useState } from 'react';
import { sendMessage } from '../services/api';

export default function MessagePanel() {
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSend = async () => {
    // Aqui você pode integrar com a API real
    // await sendMessage(message);
    setSuccess(true);
    setMessage('');
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div style={{ background: '#fff', borderRadius: 12, padding: '2rem', boxShadow: '0 2px 12px #0a234210', maxWidth: 500 }}>
      <textarea
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Digite sua mensagem..."
        style={{
          width: '100%',
          minHeight: 80,
          padding: '0.8rem',
          borderRadius: 8,
          border: '1px solid #155fa0',
          background: '#f8fafc',
          color: '#0a2342',
          fontSize: 16,
          marginBottom: 12,
        }}
      />
      <button
        onClick={handleSend}
        style={{
          padding: '1rem 2rem',
          borderRadius: 12,
          background: 'linear-gradient(100deg, #38bdf8 0%, #155fa0 100%)',
          color: '#fff',
          fontWeight: 800,
          fontSize: 17,
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 16px #38bdf850',
          transition: 'transform 0.15s, box-shadow 0.15s, background 0.2s',
          outline: 'none',
        }}
        onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 6px 24px #38bdf880'; }}
        onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px #38bdf850'; }}
      >Enviar</button>
      {success && <div style={{ color: '#22c55e', marginTop: 10 }}>Mensagem enviada!</div>}
    </div>
  );
}
