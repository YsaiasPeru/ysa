import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('http://localhost:5000/api/categories', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setCategories(res.data));
  }, []);

  const addCategory = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/categories', { name }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setCategories([...categories, res.data]);
    setName('');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🏷️ Categorías</h1>
      <form onSubmit={addCategory} className="flex gap-2 mb-4">
        <input className="border p-2" placeholder="Nueva categoría" value={name} onChange={e => setName(e.target.value)} />
        <button className="bg-blue-500 text-white px-4 py-2">Agregar</button>
      </form>
      <ul className="list-disc ml-5">
        {categories.map(cat => <li key={cat._id}>{cat.name}</li>)}
      </ul>
    </div>
  );
}
