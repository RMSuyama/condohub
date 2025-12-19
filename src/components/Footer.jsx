import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="brand-dot"></span>
          CondoHub
        </div>
        <div className="footer-info">
          &copy; 2025 Condomínio Inteligente. Todos os direitos reservados.
        </div>
        <div className="footer-links">
          <a href="#ajuda">Ajuda</a>
          <a href="#termos">Termos</a>
          <a href="#privacidade">Privacidade</a>
        </div>
      </div>
    </footer>
  );
}
