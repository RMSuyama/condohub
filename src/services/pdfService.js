import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const exportToPDF = (title, columns, data, filename = 'relatorio.pdf') => {
    const doc = jsPDF();

    // Header
    doc.setFontSize(20);
    doc.text('CondoHub - Relatório Administrativo', 14, 22);

    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.text(`Título: ${title}`, 14, 30);
    doc.text(`Data: ${new Date().toLocaleDateString('pt-BR')}`, 14, 36);

    // Line
    doc.setLineWidth(0.5);
    doc.line(14, 40, 196, 40);

    // Table
    doc.autoTable({
        startY: 45,
        head: [columns],
        body: data.map(row => Object.values(row)),
        theme: 'striped',
        headStyles: { fillColor: [51, 65, 85], textColor: 255 },
        alternateRowStyles: { fillColor: [248, 250, 252] },
        margin: { top: 45 },
    });

    // Footer
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(10);
        doc.text(`Página ${i} de ${pageCount}`, 14, doc.internal.pageSize.height - 10);
    }

    doc.save(filename);
};
