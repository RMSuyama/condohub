import React from 'react';
export default function Form({ fields, onSubmit }) {
  return (
    <form onSubmit={onSubmit} style={{ background: '#fff', borderRadius: 12, padding: '2rem', boxShadow: '0 2px 12px #0a234210', display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
      {fields.map(f => (
        <input
          key={f.name}
          type={f.type}
          placeholder={f.label}
          name={f.name}
          required={f.required}

          style={{
            padding: '0.8rem',
            borderRadius: 8,
            border: '1px solid #155fa0',
            background: '#f8fafc',
            color: '#0a2342',
            fontSize: 16,
          }}
        />
      ))}
      <button type="submit" style={{
        padding: '1rem',
        borderRadius: 12,
        background: 'linear-gradient(100deg, #155fa0 0%, #38bdf8 100%)',
        color: '#fff',
        fontWeight: 800,
        fontSize: 17,
        border: 'none',
        marginTop: 12,
        cursor: 'pointer',
        boxShadow: '0 4px 16px #155fa050',
        transition: 'transform 0.15s, box-shadow 0.15s, background 0.2s',
        outline: 'none',
      }}
      onMouseOver={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 6px 24px #155fa080'; }}
      onMouseOut={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px #155fa050'; }}
      >Enviar</button>
    </form>
  );
}
