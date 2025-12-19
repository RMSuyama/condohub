export const generateMockData = () => {
    const tipos = ['Morador', 'Moradora', 'Síndico', 'Síndica'];
    const nomesBase = ['Ana', 'Carlos', 'Beatriz', 'Roberto', 'Lucas', 'Mariana', 'Paulo', 'Fernanda', 'João', 'Patrícia', 'Rafael', 'Juliana', 'Eduardo', 'Camila', 'Bruno', 'Larissa', 'Gustavo', 'Aline', 'Felipe', 'Renata'];
    const sobrenomes = ['Souza', 'Lima', 'Silva', 'Dias', 'Oliveira', 'Costa', 'Martins', 'Almeida', 'Ferreira', 'Gomes'];

    const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

    const users = Array.from({ length: 50 }, (_, i) => {
        const nome = `${randomItem(nomesBase)} ${randomItem(sobrenomes)}`;
        const email = `${nome.toLowerCase().replace(/ /g, '.')}${i}@cond.com`;
        const tipo = i === 0 ? 'Síndica' : randomItem(tipos);
        return { id: i, nome, email, tipo };
    });

    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const servicos = ['Água', 'Luz', 'IPTU', 'Condomínio'];
    const statusBoleto = ['Pago', 'Pendente', 'Vencido'];

    const gerarValor = (servico) => {
        switch (servico) {
            case 'Água': return (80 + Math.random() * 40).toFixed(2);
            case 'Luz': return (100 + Math.random() * 60).toFixed(2);
            case 'IPTU': return (300 + Math.random() * 100).toFixed(2);
            case 'Condomínio': return (400 + Math.random() * 100).toFixed(2);
            default: return '0.00';
        }
    };

    const boletos = users.slice(0, 10).flatMap((user) =>
        servicos.map((servico, idx) => ({
            id: `${user.id}-${idx}`,
            usuario: user.nome,
            email: user.email,
            tipo: user.tipo,
            servico,
            mes: randomItem(meses),
            valor: `R$ ${gerarValor(servico)}`,
            status: randomItem(statusBoleto),
        }))
    );

    return { users, boletos };
};

export const messages = [
    { id: 1, remetente: 'Síndica', assunto: 'Reunião Extraordinária', data: '10/06', conteudo: 'Convocação para reunião sobre obras.' },
    { id: 2, remetente: 'Morador', assunto: 'Barulho', data: '09/06', conteudo: 'Solicito providências sobre barulho noturno.' },
    { id: 3, remetente: 'Admin', assunto: 'Aviso', data: '08/06', conteudo: 'Manutenção da piscina dia 12/06.' },
];

export const stats = {
    pagos: 142,
    pendentes: 12,
    vencidos: 4,
    total: 158,
    proximaReuniao: '15/06',
    reservasAtivas: 5
};
