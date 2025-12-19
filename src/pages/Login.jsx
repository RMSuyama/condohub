import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const res = login(email, password);
    setLoading(false);

    if (!res.success) {
      setError('Credenciais inválidas. Tente admin@cond.com / admin');
      return;
    }

    if (res.role === 'admin') navigate('/admin');
    else if (res.role === 'sindico') navigate('/sindico');
    else if (res.role === 'morador') navigate('/morador');
  };

  return (
    <div className="login-page">
      <div className="login-backdrop"></div>
      <div className="login-card">
        <header className="login-header">
          <div className="logo-icon">CH</div>
          <h1>CondoHub</h1>
          <p>Gestão de condomínios, simples e premium.</p>
        </header>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="input-group">
            <label>E-mail</label>
            <input
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Senha</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'Entrando...' : 'Acessar Painel'}
          </button>
        </form>

        <footer className="login-footer">
          <p>Acessos rápidos para teste:</p>
          <div className="hint-grid">
            <span>Admin: <b>admin@cond.com</b></span>
            <span>Síndico: <b>sindico@cond.com</b></span>
            <span>Morador: <b>morador@cond.com</b></span>
            <small>(Senha é o mesmo que o prefixo do e-mail)</small>
          </div>
        </footer>
      </div>
    </div>
  );
}
