import { useEffect, useState } from 'react';
import { ArbolSugerencias } from '@/lib/arbol';
import { Burbuja } from '@/components/Burbuja';

const arbol = new ArbolSugerencias();
['Tecnología', 'Videojuegos', 'IA', 'Redes Sociales', 'Startups'].forEach((v) => arbol.insertar(v));

export default function Home() {
  const [sugerencias, setSugerencias] = useState<string[]>([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const ordenadas = arbol.inOrden();
    setSugerencias(ordenadas);
  }, []);

  const agregarSugerencia = () => {
    if (!input.trim()) return;
    arbol.insertar(input.trim());
    setSugerencias(arbol.inOrden());
    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Sugerencias Inteligentes</h1>

      <div className="mb-6 flex items-center gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Nueva sugerencia"
          className="px-3 py-2 rounded border border-gray-300 shadow-sm w-full max-w-sm"
        />
        <button
          onClick={agregarSugerencia}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Agregar
        </button>
      </div>

      <div className="flex flex-col items-start gap-2">
        {sugerencias.map((sug, idx) => (
          <Burbuja key={idx} texto={sug} />
        ))}
      </div>
    </div>
  );
}