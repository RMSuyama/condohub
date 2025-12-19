import React, { useState } from 'react';
import Form from '../components/Form';

export default function Retification() {
  const [success, setSuccess] = useState(false);
  const fields = [
    { name: 'motivo', type: 'text', label: 'Motivo', required: true },
    { name: 'comprovante', type: 'file', label: 'Comprovante', required: false }
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
  };
  return (
    <div>
      <h2>Solicitar Retificação de Boleto</h2>
      <Form fields={fields} onSubmit={handleSubmit} />
      {success && <div>Solicitação enviada!</div>}
    </div>
  );
}
