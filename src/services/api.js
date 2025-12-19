// Exemplo de serviço de API para integração com backend
export async function getTickets() {
  // Substitua por chamada real ao backend
  return [
    { mês: 'Dezembro', valor: 'R$ 500,00', status: 'Pago' },
    { mês: 'Janeiro', valor: 'R$ 500,00', status: 'Pendente' },
    { mês: 'Fevereiro', valor: 'R$ 500,00', status: 'Vencido' }
  ];
}

export async function sendMessage(message) {
  // Substitua por chamada real ao backend
  return { success: true };
}
