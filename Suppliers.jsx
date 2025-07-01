import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Suppliers() {
  const [suppliers, setSuppliers] = useState([]);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('http://localhost:5000/api/suppliers', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => setSuppliers(res.data));
  }, []);

  const addSupplier = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/suppliers', { name, contact }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    setSuppliers([...suppliers, res.data]);
    setName('');
    setContact('');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">📦 Proveedores</h1>
      <form onSubmit={addSupplier} className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
        <input className="border p-2" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)} />
        <input className="border p-2" placeholder="Contacto" value={contact} onChange={e => setContact(e.target.value)} />
        <button className="bg-green-600 text-white px-4 py-2">Agregar</button>
      </form>
      <ul className="list-disc ml-5">
        {suppliers.map(sup => <li key={sup._id}>{sup.name} - {sup.contact}</li>)}
      </ul>
    </div>
  );
}
