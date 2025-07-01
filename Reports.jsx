import { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Reports() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:5000/api/products', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setProducts(res.data));
  }, []);

  const data = {
    labels: products.map(p => p.name),
    datasets: [{
      label: 'Stock actual',
      data: products.map(p => p.stock),
      backgroundColor: 'rgba(59,130,246,0.7)'
    }]
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📊 Reportes de Inventario</h1>
      <div className="max-w-3xl">
        <Bar data={data} />
      </div>
    </div>
  );
}
