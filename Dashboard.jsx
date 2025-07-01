import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [lowStock, setLowStock] = useState([]);

  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('http://localhost:5000/api/products', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setProducts(res.data));

    axios.get('http://localhost:5000/api/alerts/low-stock', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setLowStock(res.data));
  }, []);

  const updateStock = async (id, type) => {
    const quantity = parseInt(prompt(`Cantidad a ${type === 'entry' ? 'agregar' : 'retirar'}:`));
    if (!quantity || quantity < 0) return;
    await axios.post(`http://localhost:5000/api/movements/${type}/${id}`, { quantity }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    window.location.reload();
  };

  return (
    <>
      <Navbar />
      <div className="p-6 space-y-8">
        <h1 className="text-2xl font-bold">Dashboard</h1>

        {lowStock.length > 0 && (
          <div className="p-4 bg-yellow-100 border border-yellow-300 rounded">
            <h2 className="font-bold mb-2">⚠️ Productos con stock bajo</h2>
            <ul className="list-disc ml-5">
              {lowStock.map(p => <li key={p._id}>{p.name} ({p.stock})</li>)}
            </ul>
          </div>
        )}

        <h2 className="text-xl font-semibold">Inventario</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map(product => (
            <li key={product._id} className="p-4 border rounded shadow-sm space-y-2">
              <div><strong>{product.name}</strong></div>
              <div>Stock: {product.stock}</div>
              <div className="space-x-2">
                <button
                  onClick={() => updateStock(product._id, 'entry')}
                  className="px-3 py-1 bg-green-500 text-white rounded">Entrada</button>
                <button
                  onClick={() => updateStock(product._id, 'exit')}
                  className="px-3 py-1 bg-red-500 text-white rounded">Salida</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
