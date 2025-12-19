import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) return null;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to={`/${user.role}`} className="navbar-brand">
          <div className="brand-icon">CH</div>
          <span>CondoHub</span>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`}></div>
        </button>

        <ul className={`navbar-links ${menuOpen ? 'mobile-show' : ''}`}>
          {/* O Admin vê TUDO */}
          {user.role === 'admin' ? (
            <>
              <li className="nav-group-label">Admin:</li>
              <li><Link to="/admin" onClick={() => setMenuOpen(false)}>Dashboard</Link></li>
              <li className="nav-divider"></li>
              <li className="nav-group-label">Visão:</li>
              <li><Link to="/sindico" onClick={() => setMenuOpen(false)}>Síndico</Link></li>
              <li><Link to="/morador" onClick={() => setMenuOpen(false)}>Morador</Link></li>
            </>
          ) : (
            <>
              {user.role === 'sindico' && (
                <>
                  <li><Link to="/sindico" onClick={() => setMenuOpen(false)}>Início</Link></li>
                  <li><Link to="/sindico/financeiro" onClick={() => setMenuOpen(false)}>Financeiro</Link></li>
                  <li><Link to="/sindico/reservas" onClick={() => setMenuOpen(false)}>Reservas</Link></li>
                </>
              )}
              {user.role === 'morador' && (
                <>
                  <li><Link to="/morador" onClick={() => setMenuOpen(false)}>Início</Link></li>
                  <li><Link to="/morador/boletos" onClick={() => setMenuOpen(false)}>Boletos</Link></li>
                  <li><Link to="/morador/reservas" onClick={() => setMenuOpen(false)}>Reservas</Link></li>
                </>
              )}
            </>
          )}

          <li className="mobile-only logout-link">
            <button onClick={handleLogout}>Sair da Conta</button>
          </li>
        </ul>

        <div className="navbar-user hide-mobile">
          <div className="user-info">
            <span className="user-email">{user.email}</span>
            <span className="user-role">{user.role}</span>
          </div>
          <button onClick={handleLogout} className="logout-button">
            Sair
          </button>
        </div>
      </div>
    </nav>
  );
}
