import React, { useState } from 'react';
import { login } from '../services/auth';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('morador');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Chamada para cadastro (mock)
    setError('Cadastro realizado!');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10">
      <h2 className="text-xl mb-4">Cadastro</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="input" />
      <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} required className="input" />
      <select value={role} onChange={e => setRole(e.target.value)} className="input">
        <option value="morador">Morador</option>
        <option value="admin">Administrador</option>
      </select>
      {error && <div className="text-green-500">{error}</div>}
      <button type="submit" className="btn">Cadastrar</button>
    </form>
  );
}
