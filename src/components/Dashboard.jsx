import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Dashboard({ stats }) {
  const data = {
    labels: ['Pagos', 'Pendentes', 'Vencidos'],
    datasets: [{
      label: 'Boletos',
      data: [stats.pagos, stats.pendentes, stats.vencidos],
      backgroundColor: ['#38bdf8', '#f59e0b', '#ef4444'],
      borderRadius: 8,
    }]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: '#1e293b',
        titleColor: '#f8fafc',
        bodyColor: '#94a3b8',
        padding: 12,
        cornerRadius: 8,
        displayColors: false
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#94a3b8', font: { size: 12, weight: '600' } }
      },
      y: {
        grid: { color: 'rgba(255,255,255,0.05)' },
        ticks: { color: '#94a3b8', font: { size: 12 } }
      }
    }
  };

  return (
    <div style={{ height: '300px', width: '100%', padding: '1rem' }}>
      <Bar data={data} options={options} />
    </div>
  );
}
