import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/auth';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login(email, password);
    if (!res.success || res.role !== 'admin') {
      setError('Credenciais inválidas para administrador.');
      return;
    }
    navigate('/admin');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#111' }}>
      <div style={{ background: '#181818', borderRadius: '2rem', boxShadow: '0 8px 32px 0 #0008', padding: '3rem 2.5rem', width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', border: '1.5px solid #38bdf8' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
          <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'linear-gradient(135deg, #155fa0 0%, #38bdf8 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
            <span style={{ color: '#fff', fontWeight: 900, fontSize: 32, letterSpacing: 2 }}>CT</span>
          </div>
          <h1 style={{ color: '#38bdf8', fontWeight: 800, fontSize: 32, margin: 0, letterSpacing: 1 }}>Cond. admin</h1>
          <div style={{ color: '#fff', fontSize: 15, marginTop: 6, textAlign: 'center', fontWeight: 500 }}>
            Acesso restrito para administradores.
          </div>
        </div>
        <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required style={{ width: '100%', padding: '0.9rem', borderRadius: 8, border: '1.5px solid #38bdf8', background: '#222', color: '#fff', fontSize: 17, marginBottom: 4 }} />
          <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required style={{ width: '100%', padding: '0.9rem', borderRadius: 8, border: '1.5px solid #38bdf8', background: '#222', color: '#fff', fontSize: 17, marginBottom: 8 }} />
          <button type="submit"
            style={{
              width: '100%',
              padding: '1rem',
              borderRadius: 12,
              background: 'linear-gradient(100deg, #38bdf8 0%, #155fa0 100%)',
              color: '#fff',
              fontWeight: 800,
              fontSize: 18,
              border: 'none',
              marginTop: 12,
              cursor: 'pointer',
              boxShadow: '0 4px 16px #38bdf850',
              letterSpacing: 1,
              transition: 'transform 0.15s, box-shadow 0.15s, background 0.2s',
              outline: 'none',
            }}
            onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 6px 24px #38bdf880'; }}
            onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px #38bdf850'; }}
          >Entrar</button>
          {error && <div style={{ color: '#e11d48', marginTop: 8, fontWeight: 600 }}>{error}</div>}
        </form>
        <div style={{ color: '#38bdf8', fontSize: 13, marginTop: 18, textAlign: 'center', fontWeight: 600 }}>
          admin@cond.com / admin
        </div>
      </div>
    </div>
  );
}
