import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex flex-wrap justify-between items-center">
      <div className="font-bold text-lg">Avícola D'Sebas</div>
      <div className="flex flex-wrap gap-4 text-sm md:text-base">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/reports" className="hover:underline">Reportes</Link>
        <Link to="/users" className="hover:underline">Usuarios</Link>
        <Link to="/categories" className="hover:underline">Categorías</Link>
        <Link to="/suppliers" className="hover:underline">Proveedores</Link>
        <button onClick={() => { localStorage.clear(); window.location.href = '/'; }} className="text-red-400 hover:text-red-600">
          Cerrar sesión
        </button>
      </div>
    </nav>
  );
}
