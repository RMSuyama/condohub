import React from 'react';
export default function Table({ data, columns }) {
  return (
    <div style={{ overflowX: 'auto', margin: '1.5rem 0' }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        background: '#fff',
        borderRadius: 12,
        boxShadow: '0 2px 12px #0a234210',
        overflow: 'hidden',
      }}>
        <thead style={{ background: '#155fa0' }}>
          <tr>
            {columns.map(c => (
              <th key={c} style={{ color: '#fff', fontWeight: 700, padding: '0.9rem', fontSize: 16, letterSpacing: 1, borderBottom: '2px solid #0a2342' }}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? '#f8fafc' : '#e0e7ef' }}>
              {columns.map(c => (
                <td key={c} style={{ padding: '0.8rem', color: '#0a2342', fontSize: 15, borderBottom: '1px solid #e0e7ef' }}>{row[c.toLowerCase()]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
